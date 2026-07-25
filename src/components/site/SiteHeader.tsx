import { useEffect, useId, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AVAILABLE_LOCALES, useI18n } from '@/i18n';

export default function SiteHeader() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const showLanguageSwitcher = AVAILABLE_LOCALES.length > 1;
  const menuId = useId();

  const links = [
    { to: '/', label: t.nav.product },
    { to: '/about', label: t.nav.about },
    { to: '/team', label: t.nav.team },
    { to: '/faq', label: t.nav.faq },
    { to: '/docs', label: t.nav.docs },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300',
        open
          ? 'border-b border-white/[0.06] bg-[#070708]'
          : scrolled
            ? 'border-b border-white/[0.06] bg-[#070708]/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="relative z-[60] mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          KurdLogs
          <span className="ms-1.5 font-medium text-muted-foreground">Core</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm transition-colors',
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {showLanguageSwitcher ? (
            <div
              className="inline-flex items-center rounded-md border border-border bg-background/60 p-0.5"
              role="group"
              aria-label={t.nav.language}
            >
              {AVAILABLE_LOCALES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLocale(item.id)}
                  className={cn(
                    'rounded px-2.5 py-1 text-xs font-medium transition-colors',
                    locale === item.id
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                  aria-pressed={locale === item.id}
                >
                  {item.id === 'en' ? 'English' : 'کوردی'}
                </button>
              ))}
            </div>
          ) : null}
          <Button asChild size="sm">
            <Link to="/docs">{t.nav.installGuide}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] transition-[background,border-color,transform] duration-300 hover:border-white/20 hover:bg-white/[0.06] active:scale-95 md:hidden"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-[18px]" aria-hidden>
            <span
              className={cn(
                'absolute left-0 top-0 h-[1.5px] w-full origin-center rounded-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                open && 'top-[6px] rotate-45'
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-[6px] h-[1.5px] w-full rounded-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                open && 'scale-x-0 opacity-0'
              )}
            />
            <span
              className={cn(
                'absolute left-0 top-[12px] h-[1.5px] w-full origin-center rounded-full bg-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                open && 'top-[6px] -rotate-45'
              )}
            />
          </span>
        </button>
      </div>

      <div
        id={menuId}
        className={cn(
          'fixed inset-0 z-50 md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            'absolute inset-0 bg-[#070708] transition-opacity duration-500 ease-out',
            open ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => setOpen(false)}
        />
        <div
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04),transparent_50%)] transition-opacity duration-500',
            open ? 'opacity-100' : 'opacity-0'
          )}
        />

        <nav
          className={cn(
            'relative flex h-full flex-col px-6 pb-10 pt-24 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-8',
            open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          )}
        >
          <ul className="flex flex-1 flex-col justify-center gap-1">
            {links.map((link, index) => (
              <li
                key={link.to}
                className={cn(open && 'animate-menu-reveal')}
                style={open ? { animationDelay: `${80 + index * 55}ms` } : undefined}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'group flex items-baseline gap-4 border-b border-white/[0.06] py-4 transition-colors',
                      isActive ? 'text-white' : 'text-white/45 hover:text-white'
                    )
                  }
                >
                  <span className="font-mono text-[11px] tracking-[0.18em] text-white/25 transition-colors group-hover:text-white/45">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display text-[2.15rem] font-semibold leading-none tracking-tight sm:text-4xl">
                    {link.label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            className={cn('mt-8 space-y-4', open && 'animate-menu-reveal')}
            style={open ? { animationDelay: `${80 + links.length * 55}ms` } : undefined}
          >
            {showLanguageSwitcher ? (
              <div
                className="inline-flex w-full items-center rounded-xl border border-white/[0.08] bg-white/[0.03] p-1"
                role="group"
                aria-label={t.nav.language}
              >
                {AVAILABLE_LOCALES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLocale(item.id)}
                    className={cn(
                      'flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      locale === item.id
                        ? 'bg-white text-[#0a0a0b]'
                        : 'text-white/50 hover:text-white'
                    )}
                    aria-pressed={locale === item.id}
                  >
                    {item.id === 'en' ? 'English' : 'کوردی'}
                  </button>
                ))}
              </div>
            ) : null}

            <Link
              to="/docs"
              onClick={() => setOpen(false)}
              className="group flex h-14 w-full items-center justify-between rounded-2xl bg-[#f3f2ef] px-5 text-[#0a0a0b] transition-transform duration-300 active:scale-[0.98]"
            >
              <span className="text-[15px] font-semibold tracking-tight">{t.nav.installGuide}</span>
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
