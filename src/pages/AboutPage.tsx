import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero, Section, SectionHeading } from '@/components/site/Section';
import { TechList } from '@/components/site/TechList';
import { COMPANY_TECH, teamPhotos } from '@/data/site';
import { useI18n } from '@/i18n';
import { usePageTitle } from '@/lib/usePageTitle';

export default function AboutPage() {
  const { t } = useI18n();
  usePageTitle(`${t.about.title} — KurdLogs`, t.about.description);

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        subtitle={t.about.role}
        description={t.about.description}
      />
      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>{t.about.p1}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <Link to="/project">
                  {t.about.viewProducts}
                  <ArrowRight className="rtl:rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/wave">{t.about.viewWave}</Link>
              </Button>
            </div>
          </div>
          <div className="aspect-square overflow-hidden rounded-2xl border border-border bg-[#a8e000]">
            <img
              src={teamPhotos[0]}
              alt={t.about.imageAlt}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </Section>
      <Section className="border-t border-border bg-card/30">
        <SectionHeading
          eyebrow={t.company.techEyebrow}
          title={t.company.techTitle}
          description={t.company.techDescription}
        />
        <TechList items={[...COMPANY_TECH]} />
      </Section>
    </>
  );
}
