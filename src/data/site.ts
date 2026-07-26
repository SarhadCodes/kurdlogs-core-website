export const PANEL_URL = import.meta.env.VITE_PANEL_URL || 'http://localhost:8081';
export const INSTALL_SH_URL = 'https://kurdlogs-core.sarhadyt.workers.dev/install.sh';
export const INSTALL_PS1_URL = 'https://kurdlogs-core.sarhadyt.workers.dev/install.ps1';
export const REPO_PAGE_URL = 'https://github.com/SarhadCodes/Kurdlogs-core';

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
