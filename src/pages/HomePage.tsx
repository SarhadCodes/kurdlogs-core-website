import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Section, SectionHeading } from '@/components/site/Section';
import InteractiveHero from '@/components/site/InteractiveHero';
import { TechList } from '@/components/site/TechList';
import { COMPANY_TECH } from '@/data/site';
import { useI18n } from '@/i18n';
import { usePageTitle } from '@/lib/usePageTitle';

export default function HomePage() {
  const { t } = useI18n();
  usePageTitle(t.meta.title, t.meta.description);

  return (
    <>
      <InteractiveHero />

      <Section id="technologies" className="scroll-mt-16 border-t border-border bg-card/30 pt-16 sm:pt-20">
        <SectionHeading
          eyebrow={t.company.techEyebrow}
          title={t.company.techTitle}
          description={t.company.techDescription}
        />
        <TechList items={[...COMPANY_TECH]} />
      </Section>

      <Section className="border-t border-border pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[linear-gradient(145deg,hsl(240_5%_9%),hsl(240_6%_4%))] px-8 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <p className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-balance">
            {t.company.ctaTitle}
          </p>
          <p className="mt-4 max-w-xl text-muted-foreground">{t.company.ctaBody}</p>
          <Separator className="my-8 max-w-xs bg-border/80" />
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/project">
                {t.nav.viewProject}
                <ArrowRight className="rtl:rotate-180" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/wave">{t.company.waveCta}</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
