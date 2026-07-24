import { PageHero, Section } from '@/components/site/Section';
import { teamPhotos } from '@/data/site';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';

export default function TeamPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t.team.eyebrow} title={t.team.title} description={t.team.description} />
      <Section>
        <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-2">
          {t.team.members.map((member, index) => {
            const photo = teamPhotos[index];
            const isTeamLogo = index === 1;
            return (
              <article
                key={member.name}
                className="overflow-hidden rounded-2xl border border-border bg-card/40 transition-colors hover:bg-card"
              >
                {photo ? (
                  <div
                    className={cn(
                      'aspect-square overflow-hidden border-b border-border',
                      isTeamLogo ? 'bg-white' : 'bg-[#a8e000]'
                    )}
                  >
                    <img
                      src={photo}
                      alt={member.name}
                      className={cn(
                        'h-full w-full',
                        isTeamLogo ? 'object-contain p-6 sm:p-8' : 'object-cover object-top'
                      )}
                    />
                  </div>
                ) : null}
                <div className="p-6">
                  <h2 className="font-display text-xl font-semibold text-foreground">{member.name}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
