import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import DotGrid from '@/components/DotGrid';
import { Button } from '@/components/ui/button';
import HeroGlobe from '@/components/site/HeroGlobe';
import { useI18n } from '@/i18n';
import { cn } from '@/lib/utils';

export default function InteractiveHero() {
  const { t, dir } = useI18n();

  return (
    <section className="relative min-h-[100dvh] overflow-hidden bg-[#070708]">
      <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={5}
          gap={18}
          baseColor="#2f293a"
          activeColor="#fafafa"
          proximity={90}
          speedTrigger={10000}
          shockRadius={0}
          shockStrength={0}
          maxSpeed={5000}
          resistance={1200}
          returnDuration={0.6}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-background/40 via-transparent to-background"
      />
      {/* Desktop: protect copy on the text side */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-y-0 z-[1] hidden w-[48%] sm:block',
          dir === 'rtl'
            ? 'right-0 bg-gradient-to-l from-background via-background/70 to-transparent'
            : 'left-0 bg-gradient-to-r from-background via-background/70 to-transparent'
        )}
      />
      {/* Mobile: keep the brand readable over the globe */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[6] bg-[linear-gradient(180deg,rgba(7,7,8,0.55)_0%,rgba(7,7,8,0.2)_38%,rgba(7,7,8,0.75)_72%,rgba(7,7,8,1)_100%)] sm:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-gradient-to-t from-background to-transparent"
      />

      <div
        className={cn(
          'pointer-events-none absolute z-[5] flex',
          // Mobile: sit the globe upper-right as atmosphere, not competing with the title
          'inset-x-0 top-[4.5rem] h-[min(58vw,280px)] items-start justify-center',
          // Desktop: side panel
          'sm:inset-y-0 sm:top-auto sm:right-0 sm:h-auto sm:w-[56%] sm:items-center sm:justify-end lg:w-[54%]',
          dir === 'rtl' && 'sm:right-auto sm:left-0 sm:justify-start'
        )}
      >
        <div
          className={cn(
            'pointer-events-auto aspect-square animate-globe-in',
            'w-[min(70vw,300px)] translate-x-[18%] opacity-50',
            'sm:w-[min(54vw,620px)] sm:translate-x-[4%] sm:translate-y-0 sm:opacity-100',
            'lg:w-[min(50vw,680px)] lg:translate-x-[6%]',
            dir === 'rtl' && 'translate-x-[-18%] sm:-translate-x-[4%] lg:-translate-x-[6%]'
          )}
        >
          <HeroGlobe className="h-full w-full animate-globe-float" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:justify-center sm:px-8 sm:pb-20">
        <div className="max-w-xl animate-fade-up pointer-events-none lg:max-w-2xl [&_a]:pointer-events-auto [&_button]:pointer-events-auto">
          <p className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            KurdLogs
            <span className="mt-1 block font-semibold text-white/65 sm:mt-2">Core</span>
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:mt-6 sm:max-w-xl sm:text-xl">
            {t.hero.tagline}
          </p>
          <div className="mt-8 sm:mt-10">
            <Button asChild size="lg">
              <Link to="/docs">
                {t.hero.cta}
                <ArrowRight className="rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
