export const PANEL_URL = import.meta.env.VITE_PANEL_URL || 'http://localhost:8081';
export const INSTALL_SH_URL = 'https://kurdlogs-core.sarhadyt.workers.dev/install.sh';
export const INSTALL_PS1_URL = 'https://kurdlogs-core.sarhadyt.workers.dev/install.ps1';
export const REPO_PAGE_URL = 'https://github.com/SarhadCodes/Kurdlogs-core';
export const GITHUB_URL = 'https://github.com/SarhadCodes';
export const CORE_SCREENSHOT = '/screenshots/dashboard.png';
export const CORE_ICON = '/images/products/core-icon.svg';
export const LIVE_WAVE_ICON = '/images/products/live-wave-icon.png';
export const CONTROL_ICON = '/images/products/control-icon.svg';
export const PRODUCT_PATHS = ['/wave'] as const;
export const WAVE_DOWNLOAD_URL =
  import.meta.env.VITE_WAVE_DOWNLOAD_URL ||
  'https://github.com/SarhadCodes/LiveWave/releases/download/v7.0.0/Wave.apk';

export const WAVE_SCREENSHOTS = [
  '/images/products/wave/home.jpg',
  '/images/products/wave/live-tv.jpg',
  '/images/products/wave/movies.jpg',
  '/images/products/wave/series.jpg',
  '/images/products/wave/music.jpg',
  '/images/products/wave/now-playing.jpg',
  '/images/products/wave/settings.jpg',
] as const;

export const COMPANY_TECH = [
  'Flutter',
  'React',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'FFmpeg',
  'Cloudflare',
  'Supabase',
] as const;

export const CORE_TECH = ['Docker', 'FFmpeg', 'Node.js', 'PostgreSQL', 'React'] as const;
export const LIVE_WAVE_TECH = ['Flutter', 'ExoPlayer'] as const;
export const CONTROL_TECH = ['WinUI 3', '.NET', 'C#'] as const;

export const screenshotSrcs = [
  '/screenshots/dashboard.png',
  '/screenshots/channels.png',
  '/screenshots/playlists.png',
  '/screenshots/blueprints.png',
  '/screenshots/monitoring.png',
] as const;

export const teamPhotos = [
  '/images/team/sarhad.png',
  '/images/team/kurdlogs-team-wave-v3.png',
] as const;

export const requirementHrefs = [
  'https://www.docker.com/products/docker-desktop/',
  'https://docs.docker.com/engine/install/',
  'https://learn.microsoft.com/en-us/windows/wsl/install',
] as const;

export const installCommandCodes = [
  'curl -fsSL https://kurdlogs-core.sarhadyt.workers.dev/install.sh | sudo bash',
  'irm https://kurdlogs-core.sarhadyt.workers.dev/install.ps1 | iex',
  'cd /opt/kurdlogs-core\ndocker compose ps\ndocker compose logs -f backend',
] as const;
