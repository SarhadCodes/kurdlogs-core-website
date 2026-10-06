import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, Section } from '@/components/site/Section';
import { LIVE_WAVE_ICON, WAVE_DOWNLOAD_URL } from '@/data/site';
import { formatMessage, useI18n } from '@/i18n';
import { usePageTitle } from '@/lib/usePageTitle';
import { useWaveDownloadCount } from '@/lib/useWaveDownloadCount';

export default function ProjectPage() {
  const { t } = useI18n();
  const downloads = useWaveDownloadCount();
  usePageTitle(`${t.projectPage.title} — KurdLogs`, t.projectPage.description);

  return (
    <>
      <PageHero
        eyebrow={t.projectPage.eyebrow}
        title={t.projectPage.title}
        description={t.projectPage.description}
      />
      <Section className="pb-24">
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/30 p-4 sm:gap-5 sm:p-5">
          <Link
            to="/wave"
            className="h-16 w-16 shrink-0 overflow-hidden rounded-[1.15rem] border border-white/10 bg-black sm:h-20 sm:w-20 sm:rounded-[1.35rem]"
          >
            <img src={LIVE_WAVE_ICON} alt="" className="h-full w-full object-cover" />
          </Link>

          <div className="min-w-0 flex-1">
            <Link
              to="/wave"
              className="font-display text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80 sm:text-2xl"
            >
              {t.company.waveName}
            </Link>
            <p className="mt-0.5 truncate text-sm text-muted-foreground sm:mt-1">
              {t.company.waveTagline}
            </p>
            {downloads !== null ? (
              <p className="mt-1 text-xs text-muted-foreground">
                {formatMessage(t.wave.downloads, {
                  count: downloads.toLocaleString(),
                })}
              </p>
            ) : null}
          </div>

          <Button asChild className="shrink-0">
            <a
              href={WAVE_DOWNLOAD_URL}
              {...(/^https?:\/\//i.test(WAVE_DOWNLOAD_URL)
                ? { target: '_blank', rel: 'noreferrer' }
                : { download: true })}
            >
              {t.wave.get}
            </a>
          </Button>
        </div>
      </Section>
    </>
  );
}
