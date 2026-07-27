import { CheckCircle2, Copy, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { PageHero, Section, SectionHeading } from '@/components/site/Section';
import {
  INSTALL_PS1_URL,
  INSTALL_SH_URL,
  installCommandCodes,
  requirementHrefs,
} from '@/data/site';
import { useI18n } from '@/i18n';

function CodeBlock({ label, code, copyLabel, copiedLabel }: { label: string; code: string; copyLabel: string; copiedLabel: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#0a0a0b]">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <Button type="button" variant="ghost" size="sm" className="h-8 gap-1.5 text-xs" onClick={copy}>
          {copied ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? copiedLabel : copyLabel}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed text-foreground/90" dir="ltr">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DocsPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t.docs.eyebrow} title={t.docs.title} description={t.docs.description} />

      <Section className="pt-0 sm:pt-0">
        <SectionHeading
          eyebrow={t.docs.tutorialEyebrow}
          title={t.docs.tutorialTitle}
          description={t.docs.tutorialDescription}
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-[#0a0a0b] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          <video
            className="aspect-video w-full bg-black"
            controls
            preload="metadata"
            playsInline
            poster="/videos/install-poster.png"
          >
            <source src="/videos/install-kurdlogs-core.mp4" type="video/mp4" />
            {t.docs.videoFallback}
          </video>
        </div>
        <p className="mx-auto mt-4 max-w-4xl text-sm text-muted-foreground">{t.docs.tutorialNote}</p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.docs.prereqEyebrow}
          title={t.docs.prereqTitle}
          description={t.docs.prereqDescription}
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {t.docs.requirements.map((item, index) => (
            <a
              key={item.name}
              href={requirementHrefs[index]}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-card/40 px-5 py-5 transition-colors hover:border-foreground/20 hover:bg-card"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-lg font-semibold tracking-tight text-foreground">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {item.platform}
                  </p>
                </div>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors group-hover:border-foreground/30 group-hover:bg-secondary">
                  <Download className="h-4 w-4" strokeWidth={1.75} />
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                {item.cta}
                <ExternalLink className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {t.docs.extraNeeds.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border/70 px-4 py-3.5 text-sm text-muted-foreground"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section className="border-t border-border bg-card/20 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow={t.docs.guideEyebrow}
          title={t.docs.guideTitle}
          description={t.docs.guideDescription}
        />
        <ol className="mx-auto max-w-3xl space-y-0">
          {t.docs.steps.map((step, index) => (
            <li key={step.title} className="relative border-s border-border ps-8 pb-12 last:pb-0">
              <span className="absolute -start-3 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background font-mono text-[11px] text-foreground">
                {index + 1}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow={t.docs.commandsEyebrow}
          title={t.docs.commandsTitle}
          description={t.docs.commandsDescription}
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {installCommandCodes.map((code, index) => (
            <CodeBlock
              key={t.docs.commandLabels[index]}
              label={t.docs.commandLabels[index]}
              code={code}
              copyLabel={t.docs.copy}
              copiedLabel={t.docs.copied}
            />
          ))}
        </div>

        <Separator className="mx-auto my-14 max-w-3xl" />

        <div className="mx-auto max-w-3xl">
          <h3 className="font-display text-2xl font-semibold text-foreground">{t.docs.defaultLogin}</h3>
          <p className="mt-3 text-muted-foreground">
            {t.docs.username}{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground" dir="ltr">
              admin
            </code>
            {' · '}
            {t.docs.password}{' '}
            <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm text-foreground" dir="ltr">
              Kurdlogs!
            </code>
            {' '}
            <span className="text-muted-foreground">
              (first install; also in{' '}
              <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-sm" dir="ltr">ADMIN_INITIAL_PASSWORD</code>)
            </span>
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{t.docs.changePassword}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href={INSTALL_SH_URL} target="_blank" rel="noreferrer">
                Linux install script
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href={INSTALL_PS1_URL} target="_blank" rel="noreferrer">
                Windows install script
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="border-t border-border pb-24">
        <SectionHeading eyebrow={t.docs.verifyEyebrow} title={t.docs.verifyTitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.docs.verifyItems.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-border px-5 py-5 text-sm leading-relaxed text-muted-foreground"
            >
              <CheckCircle2 className="mb-3 h-4 w-4 text-foreground" />
              {item}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
