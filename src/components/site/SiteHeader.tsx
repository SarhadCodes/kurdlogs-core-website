import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LOCALES, useI18n } from '@/i18n';

export default function SiteHeader() {
  const { t, locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300',
        scrolled || open
          ? 'border-b border-border/80 bg-background/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
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
          <div
            className="inline-flex items-center rounded-md border border-border bg-background/60 p-0.5"
            role="group"
            aria-label={t.nav.language}
          >
            {LOCALES.map((item) => (
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
          <Button asChild size="sm">
            <Link to="/docs">{t.nav.installGuide}</Link>
          </Button>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-3 py-3 text-base',
                    isActive ? 'bg-accent text-foreground' : 'text-muted-foreground'
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div
              className="mt-2 inline-flex w-full items-center rounded-md border border-border p-0.5"
              role="group"
              aria-label={t.nav.language}
            >
              {LOCALES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLocale(item.id)}
                  className={cn(
                    'flex-1 rounded px-3 py-2 text-sm font-medium transition-colors',
                    locale === item.id
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground'
                  )}
                  aria-pressed={locale === item.id}
                >
                  {item.id === 'en' ? 'English' : 'کوردی'}
                </button>
              ))}
            </div>
            <div className="mt-3">
              <Button asChild className="w-full" onClick={() => setOpen(false)}>
                <Link to="/docs">{t.nav.installGuide}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
