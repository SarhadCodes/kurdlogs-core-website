import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/site/Section';
import { TechList } from '@/components/site/TechList';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';

export type ProjectMetaItem = {
  label: string;
  value: string;
  hint?: string;
};

export type ProjectPreview = {
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
};

type ProjectCta = {
  label: string;
  to?: string;
  href?: string;
};

type ProjectScreenProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  status: string;
  iconSrc?: string;
  iconLabel?: string;
  iconBgClassName?: string;
  meta: ProjectMetaItem[];
  previews?: ProjectPreview[];
  previewAspect?: 'phone' | 'panel';
  cta?: ProjectCta;
  secondaryCta?: ProjectCta;
  description?: ReactNode;
  techEyebrow?: string;
  techTitle?: string;
  techNote?: string;
  tech?: string[];
  children?: ReactNode;
};

function ProjectIcon({
  src,
  label,
  className,
}: {
  src?: string;
  label: string;
  className?: string;
}) {
  if (src) {
    return (
      <img
        src={src}
        alt=""
        className={cn('h-full w-full object-cover', className)}
      />
    );
  }

  return (
    <span className="flex h-full w-full items-center justify-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
      {label}
    </span>
  );
}

function PreviewRail({
  previews,
  previewAspect,
}: {
  previews: ProjectPreview[];
  previewAspect: 'phone' | 'panel';
}) {
  const { t, dir } = useI18n();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft;
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  const updateButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const left = Math.abs(el.scrollLeft);
    setCanPrev(left > 4);
    setCanNext(left < max - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener('scroll', updateButtons, { passive: true });
    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      ro.disconnect();
    };
  }, [previews, previewAspect]);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector('figure');
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.75;
    const delta = direction * step * (dir === 'rtl' ? -1 : 1);
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={t.gallery.previous}
          disabled={!canPrev}
          onClick={() => scrollByCard(-1)}
        >
          <PrevIcon />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={t.gallery.next}
          disabled={!canNext}
          onClick={() => scrollByCard(1)}
        >
          <NextIcon />
        </Button>
      </div>

      <div
        ref={scrollerRef}
        className="-mx-5 flex gap-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] sm:-mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {previews.map((preview) => (
          <figure
            key={preview.title}
            className={cn(
              'shrink-0',
              previewAspect === 'panel'
                ? 'w-[min(85vw,420px)] sm:w-[440px]'
                : 'w-[min(78vw,280px)] sm:w-[300px]'
            )}
          >
            <p className="mb-3 text-center text-sm font-medium text-foreground/90">
              {preview.title}
            </p>
            <div className="overflow-hidden rounded-2xl border border-border bg-[#070708]">
              {preview.image ? (
                <img
                  src={preview.image}
                  alt={preview.imageAlt ?? preview.title}
                  className={cn(
                    'w-full',
                    previewAspect === 'panel'
                      ? 'aspect-[16/10] object-cover object-top'
                      : 'h-auto object-contain'
                  )}
                />
              ) : (
                <div
                  className={cn(
                    'flex flex-col justify-end bg-[linear-gradient(160deg,hsl(240_5%_10%),hsl(240_6%_4%))] p-5',
                    previewAspect === 'panel'
                      ? 'aspect-[16/10]'
                      : 'aspect-[9/19] sm:aspect-[9/19]'
                  )}
                >
                  <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
                    {preview.title}
                  </p>
                  {preview.body ? (
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {preview.body}
                    </p>
                  ) : null}
                </div>
              )}
            </div>
            {preview.body && preview.image ? (
              <figcaption className="mt-3 text-center text-xs leading-relaxed text-muted-foreground">
                {preview.body}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
    </div>
  );
}

function ProjectCtaButton({
  cta,
  size = 'lg',
  variant = 'default',
}: {
  cta: ProjectCta;
  size?: 'default' | 'sm' | 'lg' | 'icon';
  variant?: 'default' | 'outline';
}) {
  if (cta.href) {
    const external = /^https?:\/\//i.test(cta.href);
    return (
      <Button asChild size={size} variant={variant}>
        <a
          href={cta.href}
          {...(external
            ? { target: '_blank', rel: 'noreferrer' }
            : { download: true })}
        >
          {cta.label}
        </a>
      </Button>
    );
  }

  if (!cta.to) return null;

  return (
    <Button asChild size={size} variant={variant}>
      <Link to={cta.to}>
        {cta.label}
        <ArrowRight className="rtl:rotate-180" />
      </Link>
    </Button>
  );
}

export default function ProjectScreen({
  eyebrow,
  title,
  tagline,
  status,
  iconSrc,
  iconLabel,
  iconBgClassName = 'bg-[#0a0a0b]',
  meta,
  previews = [],
  previewAspect = 'phone',
  cta,
  secondaryCta,
  description,
  techEyebrow,
  techTitle,
  techNote,
  tech,
  children,
}: ProjectScreenProps) {
  const monogram = iconLabel ?? title.slice(0, 1);

  return (
    <>
      <div className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(240_5%_14%),_transparent_55%)]"
        />
        {iconSrc ? (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: `url(${iconSrc})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(48px) saturate(1.1)',
              transform: 'scale(1.2)',
            }}
          />
        ) : null}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"
        />

        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-28 sm:px-8 sm:pb-12 sm:pt-32">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </p>

          <div className="flex flex-row items-center gap-4 sm:items-end sm:gap-10">
            <div
              className={cn(
                'h-20 w-20 shrink-0 overflow-hidden rounded-[1.35rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:h-36 sm:w-36 sm:rounded-[2rem]',
                iconBgClassName
              )}
            >
              <ProjectIcon src={iconSrc} label={monogram} />
            </div>

            <div className="min-w-0 flex-1 animate-fade-up">
              <div className="flex items-start justify-between gap-3 sm:block">
                <div className="min-w-0">
                  <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
                    {title}
                  </h1>
                  <p className="mt-1 text-sm text-foreground/80 sm:mt-2 sm:text-xl">{tagline}</p>
                  <p className="mt-1 hidden text-sm text-muted-foreground sm:block">{status}</p>
                </div>
                {cta ? (
                  <div className="shrink-0 sm:hidden">
                    <ProjectCtaButton cta={cta} size="default" />
                  </div>
                ) : null}
              </div>

              {(cta || secondaryCta) && (
                <div className="mt-6 hidden flex-wrap gap-3 sm:flex">
                  {cta ? <ProjectCtaButton cta={cta} /> : null}
                  {secondaryCta ? (
                    <ProjectCtaButton cta={secondaryCta} variant="outline" />
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="relative border-t border-border/80 bg-black/25">
          <div className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-px overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {meta.map((item) => (
              <div
                key={item.label}
                className="w-[42vw] max-w-[11rem] shrink-0 snap-start px-5 py-5 sm:w-auto sm:min-w-[9.5rem] sm:max-w-none sm:flex-1 sm:px-6 sm:py-6"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {item.value}
                </p>
                {item.hint ? (
                  <p className="mt-1 text-xs text-muted-foreground">{item.hint}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {previews.length > 0 ? (
        <Section className="pt-12 sm:pt-16">
          <PreviewRail previews={previews} previewAspect={previewAspect} />
        </Section>
      ) : null}

      {description ? (
        <Section className={previews.length > 0 ? 'border-t border-border pt-16 sm:pt-20' : undefined}>
          <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </div>
        </Section>
      ) : null}

      {children}

      {tech && tech.length > 0 ? (
        <Section className="border-t border-border pb-24">
          {techEyebrow || techTitle ? (
            <div className="mb-8">
              {techEyebrow ? (
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {techEyebrow}
                </p>
              ) : null}
              {techTitle ? (
                <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {techTitle}
                </h2>
              ) : null}
              {techNote ? (
                <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{techNote}</p>
              ) : null}
            </div>
          ) : null}
          <TechList items={tech} />
        </Section>
      ) : null}
    </>
  );
}
