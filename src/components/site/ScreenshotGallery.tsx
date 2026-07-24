import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { screenshotSrcs } from '@/data/site';
import { formatMessage, useI18n } from '@/i18n';
import { cn } from '@/lib/utils';

export default function ScreenshotGallery() {
  const { t, dir } = useI18n();
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const shots = t.gallery.shots.map((shot, index) => ({
    ...shot,
    src: screenshotSrcs[index],
  }));
  const shot = shots[active];
  const PrevIcon = dir === 'rtl' ? ChevronRight : ChevronLeft;
  const NextIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  const go = useCallback(
    (direction: -1 | 1) => {
      setActive((i) => (i + direction + shots.length) % shots.length);
    },
    [shots.length]
  );

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(false);
      if (e.key === 'ArrowLeft') go(dir === 'rtl' ? 1 : -1);
      if (e.key === 'ArrowRight') go(dir === 'rtl' ? -1 : 1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, go, dir]);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <button
          type="button"
          className="group relative block w-full text-start"
          onClick={() => setLightbox(true)}
          aria-label={formatMessage(t.gallery.openFull, { title: shot.title })}
        >
          <img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            className="aspect-[16/10] w-full object-cover object-top transition-opacity duration-300"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-80" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
            <div>
              <p className="font-display text-xl font-semibold text-white sm:text-2xl">{shot.title}</p>
              <p className="mt-1 text-sm text-white/70">{shot.caption}</p>
            </div>
            <span className="hidden rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur sm:inline">
              {t.gallery.view}
            </span>
          </div>
        </button>

        <div className="flex items-center justify-between gap-3 border-t border-border px-3 py-3 sm:px-4">
          <Button type="button" variant="ghost" size="icon" aria-label={t.gallery.previous} onClick={() => go(-1)}>
            <PrevIcon />
          </Button>
          <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto py-1 scrollbar-none">
            {shots.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(index)}
                className={cn(
                  'relative h-14 w-20 shrink-0 overflow-hidden rounded-md border transition-all sm:h-16 sm:w-24',
                  index === active
                    ? 'border-primary ring-1 ring-primary/40'
                    : 'border-border opacity-60 hover:opacity-100'
                )}
                aria-label={formatMessage(t.gallery.show, { title: item.title })}
                aria-current={index === active}
              >
                <img src={item.src} alt="" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
          <Button type="button" variant="ghost" size="icon" aria-label={t.gallery.next} onClick={() => go(1)}>
            <NextIcon />
          </Button>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={shot.title}
          onClick={() => setLightbox(false)}
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute end-4 top-4 text-white hover:bg-white/10"
            aria-label={t.gallery.close}
            onClick={() => setLightbox(false)}
          >
            <X />
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute start-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 sm:start-6"
            aria-label={t.gallery.previous}
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
          >
            <PrevIcon className="h-6 w-6" />
          </Button>
          <figure
            className="relative max-h-[85dvh] max-w-5xl animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={shot.src}
              alt={shot.alt}
              className="max-h-[75dvh] w-full rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center">
              <p className="font-display text-lg font-semibold text-white">{shot.title}</p>
              <p className="mt-1 text-sm text-white/60">{shot.caption}</p>
              <p className="mt-2 font-mono text-xs text-white/40" dir="ltr">
                {active + 1} / {shots.length}
              </p>
            </figcaption>
          </figure>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute end-3 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 sm:end-6"
            aria-label={t.gallery.next}
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
          >
            <NextIcon className="h-6 w-6" />
          </Button>
        </div>
      )}
    </div>
  );
}
