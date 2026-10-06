import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero, Section } from '@/components/site/Section';
import { GITHUB_URL } from '@/data/site';
import { useI18n } from '@/i18n';
import { usePageTitle } from '@/lib/usePageTitle';

export default function ContactPage() {
  const { t } = useI18n();
  usePageTitle(`${t.contact.title} — KurdLogs`, t.contact.description);

  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />
      <Section>
        <Button asChild>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            {t.contact.github}
            <ArrowUpRight />
          </a>
        </Button>
      </Section>
    </>
  );
}
