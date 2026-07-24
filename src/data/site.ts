export const PANEL_URL = import.meta.env.VITE_PANEL_URL || 'http://localhost:8081';
export const REPO_URL = 'https://github.com/SarhadCodes/Kurdlogs-core.git';
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
  'https://github.com/SarhadCodes/Kurdlogs-core',
  'https://www.docker.com/products/docker-desktop/',
  'https://docs.docker.com/engine/install/',
  'https://git-scm.com/downloads',
  'https://learn.microsoft.com/en-us/windows/wsl/install',
] as const;

export const installCommandCodes = [
  'git clone https://github.com/SarhadCodes/Kurdlogs-core.git\ncd Kurdlogs-core',
  '.\\deploy-local.cmd',
  'sudo ./install.sh',
  'docker compose build frontend backend nginx-rtmp\ndocker compose up -d',
  'docker compose ps frontend backend nginx-rtmp',
] as const;
