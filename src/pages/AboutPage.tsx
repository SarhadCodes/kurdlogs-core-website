import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PageHero, Section } from '@/components/site/Section';
import { useI18n } from '@/i18n';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t.about.eyebrow} title={t.about.title} description={t.about.description} />
      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <img
              src="/screenshots/monitoring.png"
              alt={t.about.imageAlt}
              className="w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-border pt-16 sm:grid-cols-3">
          {t.about.pillars.map((item) => (
            <div key={item.title}>
              <h2 className="font-display text-xl font-semibold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Button asChild>
            <Link to="/team">{t.about.meetTeam}</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
