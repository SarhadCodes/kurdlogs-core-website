import ProjectScreen from '@/components/site/ProjectScreen';
import {
  LIVE_WAVE_ICON,
  LIVE_WAVE_TECH,
  WAVE_DOWNLOAD_URL,
  WAVE_SCREENSHOTS,
} from '@/data/site';
import { useI18n } from '@/i18n';
import { usePageTitle } from '@/lib/usePageTitle';

export default function WavePage() {
  const { t } = useI18n();
  usePageTitle(`${t.wave.title} — KurdLogs`, t.wave.description);

  const previews = t.wave.shots.map((shot, index) => ({
    title: shot.title,
    body: shot.caption,
    image: WAVE_SCREENSHOTS[index],
    imageAlt: shot.alt,
  }));

  return (
    <ProjectScreen
      eyebrow={t.wave.eyebrow}
      title={t.wave.title}
      tagline={t.wave.tagline}
      status={t.wave.status}
      iconSrc={LIVE_WAVE_ICON}
      iconLabel="W"
      iconBgClassName="bg-black"
      cta={{ href: WAVE_DOWNLOAD_URL, label: t.wave.get }}
      meta={[
        { label: t.projectMeta.status, value: t.wave.status },
        {
          label: t.projectMeta.platform,
          value: t.wave.platform,
          hint: t.wave.platformHint,
        },
        { label: t.projectMeta.size, value: t.wave.size },
        { label: t.projectMeta.developer, value: t.wave.developer },
        {
          label: t.projectMeta.stack,
          value: t.wave.stack,
          hint: t.wave.stackHint,
        },
      ]}
      previews={previews}
      description={
        <>
          <p>{t.wave.description}</p>
          <p>{t.wave.p1}</p>
          <p>{t.wave.p2}</p>
        </>
      }
      techEyebrow={t.wave.techEyebrow}
      techTitle={t.wave.techTitle}
      tech={[...LIVE_WAVE_TECH]}
    />
  );
}
