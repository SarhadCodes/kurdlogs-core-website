import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { PageHero, Section } from '@/components/site/Section';
import { useI18n } from '@/i18n';

export default function FaqPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHero eyebrow={t.faq.eyebrow} title={t.faq.title} description={t.faq.description} />
      <Section>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {t.faq.items.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-border bg-card/50 px-6 py-8">
          <p className="font-display text-xl font-semibold text-foreground">{t.faq.stillTitle}</p>
          <p className="mt-2 text-sm text-muted-foreground">{t.faq.stillBody}</p>
          <Button asChild className="mt-5">
            <Link to="/docs">{t.faq.goDocs}</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
