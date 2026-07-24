export type Messages = typeof en;

const en = {
  meta: {
    title: 'KurdLogs Core — Broadcast control, self-hosted',
    description:
      'KurdLogs Core — self-hosted IPTV and broadcast control. Channels, playlists, blueprints, transcoding, and monitoring in one panel.',
  },
  nav: {
    product: 'Product',
    about: 'About',
    team: 'Team',
    faq: 'FAQ',
    docs: 'Docs',
    installGuide: 'Install guide',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
  },
  footer: {
    blurb: 'Self-hosted broadcast control for channels, playlists, and continuous TV.',
    about: 'About',
    team: 'Team',
    faq: 'FAQ',
    docs: 'Documentation',
    copyright: '© {year} KurdLogs Core. MIT licensed.',
  },
  hero: {
    tagline:
      'Self-hosted broadcast control for operators who need channels, playlists, and continuous TV — without the noise.',
    cta: 'Install KurdLogs',
    hint: 'Drag the globe · move your cursor',
  },
  home: {
    galleryEyebrow: 'Gallery',
    galleryTitle: 'See the panel',
    galleryDescription:
      'Browse real KurdLogs Core screens — dashboard, channels, playlists, blueprints, and monitoring.',
    capabilitiesEyebrow: 'Capabilities',
    capabilitiesTitle: 'Everything a modern channel stack needs',
    capabilitiesDescription: 'One control surface for ingest, scheduling, delivery, and health.',
    ctaTitle: 'Ready to run your own panel?',
    ctaBody: 'Follow the step-by-step install guide and be on localhost:8081 in minutes.',
    openDocs: 'Open documentation',
    meetTeam: 'Meet the team',
  },
  about: {
    eyebrow: 'About',
    title: 'Broadcast software with an operator mindset',
    description:
      'KurdLogs Core exists so media teams can run continuous channels without stitching together fragile scripts and dashboards.',
    p1: 'KurdLogs Core is a self-hosted IPTV and MCR-style control panel. It brings channels, playlists, blueprints, transcoding, overlays, tokens, and monitoring into one dark, focused interface.',
    p2: 'The product is designed for people who keep streams on air — not for slide decks. Docker Compose ships PostgreSQL, the API, the React panel, and NGINX RTMP so you can deploy locally or on a VPS next to existing media servers.',
    p3: 'Default ports stay out of the way of common stacks (HTTP 8081, RTMP 1936). Defaults get you signed in fast; Settings and environment variables harden the install for production.',
    imageAlt: 'Monitoring overview in KurdLogs Core',
    pillars: [
      {
        title: 'Self-hosted',
        body: 'Your media, tokens, and credentials stay on infrastructure you control.',
      },
      {
        title: 'Operator-first',
        body: 'Dashboards, previews, and health signals built for people who watch channels, not charts.',
      },
      {
        title: 'Open core',
        body: 'MIT licensed. Extend blueprints, overlays, and deploy scripts to match your plant.',
      },
    ],
    meetTeam: 'Meet the team',
  },
  team: {
    eyebrow: 'Team',
    title: 'People behind the panel',
    description: 'Building KurdLogs Core for operators who keep channels on air.',
    members: [
      {
        name: 'Sarhad',
        role: 'Founder & CEO',
        bio: 'Leads KurdLogs Core end to end — product direction, operator experience, and the self-hosted stack that keeps channels on air.',
      },
      {
        name: 'KurdLogs Team',
        role: 'Engineering & operations',
        bio: 'Builds and runs the panel: streaming pipelines, Docker delivery, monitoring, and the tools broadcast teams use every day.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Answers before you deploy',
    description:
      'Common questions about hosting, login, ports, and what KurdLogs Core is built to do.',
    stillTitle: 'Still installing?',
    stillBody:
      'The documentation walks through Docker setup, first login, and verification step by step.',
    goDocs: 'Go to documentation',
    items: [
      {
        q: 'What is KurdLogs Core?',
        a: 'KurdLogs Core is a self-hosted IPTV and broadcast control panel. It helps you run channels, playlists, blueprints, transcoding, overlays, tokens, and monitoring from one modern UI.',
      },
      {
        q: 'Is it self-hosted?',
        a: 'Yes. You run it on your own machine or VPS with Docker. Your media, credentials, and streams stay under your control.',
      },
      {
        q: 'What do I need to install it?',
        a: 'Docker and Docker Compose (plus Git to clone the repo). On Windows/macOS download Docker Desktop; on Linux install Docker Engine. The Docs page has direct download links. The stack includes PostgreSQL, the API, the panel, and NGINX RTMP.',
      },
      {
        q: 'How do I log in the first time?',
        a: 'After containers are up, open the panel URL (default http://localhost:8081) and sign in with admin / admin123. Change the password in Settings immediately.',
      },
      {
        q: 'Can I run it alongside Flussonic or other media servers?',
        a: 'Yes. KurdLogs uses HTTP port 8081 and RTMP publish port 1936 by default so it can sit next to services that already use 80 or 1935.',
      },
      {
        q: 'Does it support automated TV channels?',
        a: 'Yes. Use playlists and channel blueprints to design continuous movie, music, or kids channels without writing FFmpeg graphs by hand.',
      },
      {
        q: 'Is there a license fee?',
        a: 'The project is MIT licensed. You can use, modify, and deploy it for your own broadcast operations.',
      },
    ],
  },
  docs: {
    eyebrow: 'Documentation',
    title: 'Install KurdLogs Core step by step',
    description: 'From Docker to first sign-in. Follow these steps on a local machine or VPS.',
    tutorialEyebrow: 'Tutorial',
    tutorialTitle: 'Watch the install walkthrough',
    tutorialDescription:
      'Real Docker commands from this machine, then the live KurdLogs panel at localhost:8081.',
    videoFallback: 'Your browser does not support embedded video.',
    tutorialNote:
      'The terminal section runs real docker / docker compose output from this project, then shows the running panel.',
    prereqEyebrow: 'Prerequisites',
    prereqTitle: 'Download what you need',
    prereqDescription:
      'Grab the tools below, then continue with the install steps. Each link opens the official download page.',
    extraNeeds: [
      'About 4 GB free RAM for a comfortable local stack',
      'Ports 8081 (panel) and 1936 (RTMP) available',
    ],
    guideEyebrow: 'Guide',
    guideTitle: 'Six steps to a running panel',
    guideDescription:
      'Each step builds on the previous. After the last one you should see the KurdLogs login screen.',
    commandsEyebrow: 'Commands',
    commandsTitle: 'Copy-paste commands',
    commandsDescription:
      'Use the Windows script for the smoothest local rebuild, or Compose directly.',
    copy: 'Copy',
    copied: 'Copied',
    defaultLogin: 'Default login',
    username: 'Username',
    password: 'Password',
    changePassword: 'Change this immediately in Settings after your first successful login.',
    openPanel: 'Open panel at {host}',
    githubRepo: 'GitHub repository',
    verifyEyebrow: 'Verify',
    verifyTitle: 'Confirm the install worked',
    verifyItems: [
      'Sidebar shows a build version after hard refresh',
      'Dashboard loads channel counts and status',
      'Monitoring shows CPU and memory metrics',
    ],
    steps: [
      {
        title: 'Install Docker',
        detail:
          'Download Docker from the links above. On Windows/macOS use Docker Desktop; on Linux use Docker Engine + Compose. Confirm with `docker --version` and `docker compose version`.',
      },
      {
        title: 'Get the project',
        detail:
          'Clone https://github.com/SarhadCodes/Kurdlogs-core.git then open a terminal in the project root (the folder that contains `docker-compose.yml`).',
      },
      {
        title: 'Configure environment (optional)',
        detail:
          'Copy `.env.example` to `.env` if present, or create `.env` with `JWT_SECRET`, `POSTGRES_PASSWORD`, and `HTTP_PORT=8081`. Defaults work for local testing.',
      },
      {
        title: 'Build and start',
        detail:
          'On Windows run `.\\deploy-local.cmd`. On Linux/VPS run `sudo ./install.sh`. Or use `docker compose build` then `docker compose up -d`. Wait until Postgres is healthy.',
      },
      {
        title: 'Open the panel',
        detail:
          'Visit http://localhost:8081 (or your `HTTP_PORT`). Hard refresh once after the first build. Sign in with admin / admin123.',
      },
      {
        title: 'Secure and verify',
        detail:
          'Change the admin password in Settings. Create a channel or playlist, confirm Monitoring shows CPU/memory, and check the sidebar build version after updates.',
      },
    ],
    commandLabels: [
      'Clone repository',
      'Windows (branded CLI)',
      'Linux / VPS (branded CLI)',
      'Docker Compose',
      'Check status',
    ],
    requirements: [
      {
        name: 'KurdLogs Core',
        platform: 'GitHub',
        detail: 'Clone the official repository — source, Docker Compose files, and deploy scripts.',
        cta: 'Open on GitHub',
      },
      {
        name: 'Docker Desktop',
        platform: 'Windows & macOS',
        detail: 'Includes Docker Engine and Compose — the easiest way to run KurdLogs locally.',
        cta: 'Download Docker Desktop',
      },
      {
        name: 'Docker Engine',
        platform: 'Linux / VPS',
        detail: 'Install Engine with the Compose plugin for servers. Follow the guide for your distro.',
        cta: 'Install Docker Engine',
      },
      {
        name: 'Git',
        platform: 'All platforms',
        detail: 'Required to clone the KurdLogs Core repository from GitHub.',
        cta: 'Download Git',
      },
      {
        name: 'WSL 2',
        platform: 'Windows',
        detail: 'Required by Docker Desktop on Windows. Install if the Docker setup asks for it.',
        cta: 'Install WSL',
      },
    ],
  },
  gallery: {
    view: 'View',
    previous: 'Previous',
    next: 'Next',
    close: 'Close',
    openFull: 'Open {title} full size',
    show: 'Show {title}',
    shots: [
      {
        alt: 'KurdLogs Core dashboard overview',
        title: 'Dashboard',
        caption: 'Live channel health, uptime, and infrastructure at a glance.',
      },
      {
        alt: 'Channel live preview with metrics',
        title: 'Channels',
        caption: 'Preview streams with CPU, bitrate, and health in one place.',
      },
      {
        alt: 'Playlist management screen',
        title: 'Playlists',
        caption: 'Build 24/7 schedules with looping and ordered items.',
      },
      {
        alt: 'Channel blueprint designer',
        title: 'Blueprints',
        caption: 'Design channel behavior without hand-writing FFmpeg graphs.',
      },
      {
        alt: 'System monitoring overview',
        title: 'Monitoring',
        caption: 'CPU, memory, and channel playback status in real time.',
      },
    ],
  },
  features: [
    {
      title: 'Channel control',
      body: 'Manage M3U8, MP4, RTMP, and more from a single operator panel built for broadcast teams.',
    },
    {
      title: '24/7 playlists',
      body: 'Schedule continuous channels with looping playlists and blueprints that keep content moving.',
    },
    {
      title: 'Live transcoding',
      body: 'Adaptive HLS ladders via FFmpeg so every screen gets the right quality.',
    },
    {
      title: 'Secure delivery',
      body: 'Tokenized HLS URLs with auto-refresh so streams stay protected without breaking players.',
    },
    {
      title: 'Overlays & branding',
      body: 'Logos, LIVE badges, and brand profiles applied where your audience sees them.',
    },
    {
      title: 'Operator monitoring',
      body: 'WebSocket-backed CPU, RAM, bitrate, and FPS so you catch issues before viewers do.',
    },
  ],
};

const ckb: Messages = {
  meta: {
    title: 'کوردلۆگز کۆر — کۆنترۆڵی پەخش، خۆجێگیرکراو',
    description:
      'کوردلۆگز کۆر — سیستەمی خۆجێگیرکراوی IPTV و کۆنترۆڵی پەخش. کەناڵ، پلەیلیست، بلۆپرینت، ترانسکۆد، و چاودێری لە یەک پانێڵدا.',
  },
  nav: {
    product: 'سەرەکی',
    about: 'دەربارە',
    team: 'تیم',
    faq: 'پرسیارەکان',
    docs: 'بەڵگەنامە',
    installGuide: 'ڕێنمایی ئینستاڵ',
    openMenu: 'کردنەوەی مێنیو',
    closeMenu: 'داخستنی مێنیو',
    language: 'زمان',
  },
  footer: {
    blurb: 'کۆنترۆڵی پەخشی خۆجێگیرکراو بۆ کەناڵ، پلەیلیست، و تەلەڤیزیۆنی بەردەوام.',
    about: 'دەربارە',
    team: 'تیم',
    faq: 'پرسیارەکان',
    docs: 'بەڵگەنامە',
    copyright: '© {year} کوردلۆگز کۆر. مۆڵەتی MIT.',
  },
  hero: {
    tagline:
      'کۆنتڕۆڵی پەخشی خۆجێگیرکراو بۆ دامەزراندنی کەناڵ، بەڕێوەبردنی پلەیلیست و پەخشکردنی بەردەوام ـ بەسادەیی و بێ ئاڵۆزی.',
    cta: 'ئینستاڵی کوردلۆگز',
    hint: 'گڵۆبەکە ڕابکێشە · ماوس بجوڵێنە',
  },
  home: {
    galleryEyebrow: 'گەلەری',
    galleryTitle: 'پانێڵەکە ببینە',
    galleryDescription:
      'سەیری سکرینشاتە ڕاستەقینەکانی کوردلۆگز کۆر بکە — داشبۆرد، کەناڵ، پلەیلیست، بلۆپرینت، و چاودێری.',
    capabilitiesEyebrow: 'تواناکان',
    capabilitiesTitle: 'هەموو ئەوەی ستاکێکی مۆدێرنی کەناڵ پێویستی پێیەتی',
    capabilitiesDescription: 'یەک ڕووی کۆنترۆڵ بۆ وەرگرتن، خشتەبەندی، گەیاندن، و تەندروستی سیستەم.',
    ctaTitle: 'ئامادەیت پانێڵی خۆت بەڕێوە ببەیت؟',
    ctaBody: 'ڕێنمایی هەنگاو-بە-هەنگاوی ئینستاڵ شوێن بکەوە و لە چەند خولەکدا لەسەر localhost:8081 بیت.',
    openDocs: 'کردنەوەی بەڵگەنامە',
    meetTeam: 'تیم بناسە',
  },
  about: {
    eyebrow: 'دەربارە',
    title: 'نەرمەکاڵای پەخش بە بیرکردنەوەی ئۆپەرەیتەر',
    description:
      'کوردلۆگز کۆر بۆ ئەوەیە تیمەکانی میدیا بتوانن کەناڵی بەردەوام بەڕێوە ببەن بەبێ پێکەوەلکاندنی سکریپتی لاواز و داشبۆردی جیاواز.',
    p1: 'کوردلۆگز کۆر پانێڵێکی خۆجێگیرکراوی IPTV و شێوازی MCRـە. کەناڵ، پلەیلیست، بلۆپرینت، ترانسکۆد، ئۆڤەرلەی، تۆکن، و چاودێری دەهێنێتە ناو یەک ڕووکاری تاریک و سەرنجڕاکێش.',
    p2: 'بەرهەمەکە بۆ ئەوانە دروست کراوە کە ستریم لە پەخشدا دەهێڵنەوە — نەک بۆ پێشکەشکردنی سلاید. Docker Compose سیستەمی PostgreSQL، API، پانێڵی React، و NGINX RTMP دەهێنێت بۆ ئەوەی لە ناوخۆ یان لەسەر VPS لە تەنیشت سێرڤەری میدیای هەبوو ئینستاڵی بکەیت.',
    p3: 'پۆرتە بنەڕەتییەکان لە ڕێگای ستاکە باوەکان دوور دەکەونەوە (HTTP 8081، RTMP 1936). ڕێکخستنە بنەڕەتییەکان زوو دەتهێننە ژوورەوە؛ Settings و گۆڕاوەکانی ژینگە ئینستاڵەکە بۆ پرۆداکشن بەهێز دەکەن.',
    imageAlt: 'نیشاندەری چاودێری لە کوردلۆگز کۆر',
    pillars: [
      {
        title: 'خۆجێگیرکراو',
        body: 'میدیا، تۆکن، و زانیاری چوونەژوورەوەت لەسەر ژێرخانی خۆت دەمێننەوە.',
      },
      {
        title: 'ئۆپەرەیتەر لە پێشەوە',
        body: 'داشبۆرد، پێشبینین، و نیشانەکانی تەندروستی بۆ ئەوانە دروست کراون کە کەناڵ دەبینن، نەک تەنها چارت.',
      },
      {
        title: 'کۆری کراوە',
        body: 'مۆڵەتی MIT. بلۆپرینت، ئۆڤەرلەی، و سکریپتی ئینستاڵ درێژ بکەرەوە بۆ ئەوەی لەگەڵ سیستەمەکەت بگونجێت.',
      },
    ],
    meetTeam: 'تیم بناسە',
  },
  team: {
    eyebrow: 'تیم',
    title: 'کەسانی پشت پانێڵەکە',
    description: 'دروستکردنی کوردلۆگز کۆر بۆ ئۆپەرەیتەرەکان کە کەناڵ لە پەخشدا دەهێڵنەوە.',
    members: [
      {
        name: 'سەرهەد',
        role: 'دامەزرێنەر و بەڕێوەبەری جێبەجێکار',
        bio: 'سەرکردایەتی کوردلۆگز کۆر دەکات لە سەرەتاوە تا کۆتایی — ئاراستەی بەرهەم، ئەزموونی ئۆپەرەیتەر، و ستاکی خۆجێگیرکراو کە کەناڵ لە پەخشدا دەهێڵێتەوە.',
      },
      {
        name: 'تیمی کوردلۆگز',
        role: 'ئەندازیاری و کارگێڕی',
        bio: 'پانێڵەکە دروست دەکات و بەڕێوەی دەبات: هێڵی ستریم، گەیاندنی Docker، چاودێری، و ئەو ئامرازانەی تیمەکانی پەخش هەموو ڕۆژێک بەکاریان دەهێنن.',
      },
    ],
  },
  faq: {
    eyebrow: 'پرسیارەکان',
    title: 'وەڵام پێش ئینستاڵ',
    description:
      'پرسیارە باوەکان دەربارەی میوانداری، چوونەژوورەوە، پۆرت، و ئەوەی کوردلۆگز کۆر بۆی دروست کراوە.',
    stillTitle: 'هێشتا خەریکی ئینستاڵیت؟',
    stillBody:
      'بەڵگەنامەکە هەنگاو بە هەنگاو ڕێنمایی ڕێکخستنی Docker، یەکەم چوونەژوورەوە، و پشتڕاستکردنەوەت بۆ دەکات.',
    goDocs: 'بڕۆ بۆ بەڵگەنامە',
    items: [
      {
        q: 'کوردلۆگز کۆر چییە؟',
        a: 'کوردلۆگز کۆر پانێڵێکی خۆجێگیرکراوی IPTV و کۆنترۆڵی پەخشە. یارمەتیت دەدات کەناڵ، پلەیلیست، بلۆپرینت، ترانسکۆد، ئۆڤەرلەی، تۆکن، و چاودێری لە یەک ڕووکاری مۆدێرندا بەڕێوە ببەیت.',
      },
      {
        q: 'ئایا خۆجێگیرکراوە؟',
        a: 'بەڵێ. لەسەر ئامێر یان VPSـی خۆت بە Docker بەڕێوەی دەبەیت. میدیا، زانیاری چوونەژوورەوە، و ستریمەکانت لەژێر کۆنترۆڵی خۆتدا دەمێننەوە.',
      },
      {
        q: 'بۆ ئینستاڵ چیم پێویستە؟',
        a: 'Docker و Docker Compose (هەروەها Git بۆ کلۆنکردنی ڕێپۆ). لەسەر Windows/macOS دۆکەر دێسکتۆپ دابەزێنە؛ لەسەر Linux دۆکەر ئێنجن ئینستاڵ بکە. پەڕەی بەڵگەنامە لینکی ڕاستەوخۆی هەیە. ستاکەکە PostgreSQL، API، پانێڵ، و NGINX RTMP لەخۆدەگرێت.',
      },
      {
        q: 'یەکەم جار چۆن بچمە ژوورەوە؟',
        a: 'دوای هەڵکردنی کۆنتەینەرەکان، ناونیشانی پانێڵ بکەرەوە (بنەڕەت http://localhost:8081) و بە admin / admin123 بچۆ ژوورەوە. دەستبەجێ وشەی نهێنی لە Settings بگۆڕە.',
      },
      {
        q: 'دەتوانم لە تەنیشت Flussonic یان سێرڤەری میدیای تر بەکاری بهێنم؟',
        a: 'بەڵێ. کوردلۆگز بە بنەڕەت پۆرتی HTTP 8081 و پۆرتی بڵاوکردنەوەی RTMP 1936 بەکاردەهێنێت بۆ ئەوەی لە تەنیشت خزمەتگوزارییەکان بمێنێتەوە کە پێشتر 80 یان 1935 بەکاردەهێنن.',
      },
      {
        q: 'پشتگیری کەناڵی تەلەڤیزیۆنی ئۆتۆماتیکی دەکات؟',
        a: 'بەڵێ. پلەیلیست و بلۆپرینتی کەناڵ بەکاربهێنە بۆ دیزاینکردنی کەناڵی فیلم، میوزیک، یان منداڵان بەبێ نووسینی گرافی FFmpeg بە دەست.',
      },
      {
        q: 'ئایا کرێی مۆڵەتی هەیە؟',
        a: 'پڕۆژەکە مۆڵەتی MITـی هەیە. دەتوانیت بەکاری بهێنیت، بیگۆڕیت، و بۆ کارەکانی پەخشی خۆت ئینستاڵی بکەیت.',
      },
    ],
  },
  docs: {
    eyebrow: 'بەڵگەنامە',
    title: 'ئینستاڵی کوردلۆگز کۆر هەنگاو بە هەنگاو',
    description: 'لە Dockerەوە تا یەکەم چوونەژوورەوە. ئەم هەنگاوانە لەسەر ئامێری ناوخۆ یان VPS شوێن بکەوە.',
    tutorialEyebrow: 'فێرکاری',
    tutorialTitle: 'ڤیدیۆی ئینستاڵ ببینە',
    tutorialDescription:
      'فەرمانە ڕاستەقینەکانی Docker لەم ئامێرە، پاشان پانێڵی زیندووی کوردلۆگز لە localhost:8081.',
    videoFallback: 'وێبگەڕەکەت پشتگیری ڤیدیۆی ناوێنە ناکات.',
    tutorialNote:
      'بەشی تێرمیناڵ دەرچوونی ڕاستەقینەی docker / docker composeی ئەم پڕۆژەیە پیشان دەدات، پاشان پانێڵی کارا.',
    prereqEyebrow: 'پێداویستییەکان',
    prereqTitle: 'ئەوەی پێویستتە دابەزێنە',
    prereqDescription:
      'ئامرازەکانی خوارەوە وەربگرە، پاشان بەردەوام بە لەگەڵ هەنگاوەکانی ئینستاڵ. هەر لینکێک پەڕەی فەرمی دابەزاندن دەکاتەوە.',
    extraNeeds: [
      'نزیکەی ٤ گێگابایت RAMـی بەتاڵ بۆ ستاکێکی ناوخۆیی ئاسوودە',
      'پۆرتەکانی ٨٠٨١ (پانێڵ) و ١٩٣٦ (RTMP) بەردەست بن',
    ],
    guideEyebrow: 'ڕێنمایی',
    guideTitle: 'شەش هەنگاو بۆ پانێڵێکی کارا',
    guideDescription:
      'هەر هەنگاوێک لەسەر پێشوو دروست دەبێت. دوای کۆتا هەنگاو دەبێت شاشەی چوونەژوورەوەی کوردلۆگز ببینیت.',
    commandsEyebrow: 'فەرمانەکان',
    commandsTitle: 'فەرمانەکانی کۆپی-پەیست',
    commandsDescription:
      'بۆ ئاسانترین دووبارە دروستکردنەوەی ناوخۆ سکریپتی Windows بەکاربهێنە، یان ڕاستەوخۆ Compose.',
    copy: 'کۆپی',
    copied: 'کۆپی کرا',
    defaultLogin: 'چوونەژوورەوەی بنەڕەتی',
    username: 'ناوی بەکارهێنەر',
    password: 'وشەی نهێنی',
    changePassword: 'دوای یەکەم چوونەژوورەوەی سەرکەوتوو دەستبەجێ ئەمە لە Settings بگۆڕە.',
    openPanel: 'کردنەوەی پانێڵ لە {host}',
    githubRepo: 'ڕێپۆزیتۆری GitHub',
    verifyEyebrow: 'پشتڕاستکردنەوە',
    verifyTitle: 'دڵنیابە ئینستاڵ سەرکەوتوو بوو',
    verifyItems: [
      'دوای نوێکردنەوەی تەواو (Hard Refresh)، سایدبار وەشانی بیلد پیشان دەدات',
      'داشبۆرد ژمارە و دۆخی کەناڵەکان بار دەکات',
      'چاودێری پێوەرەکانی CPU و میمۆری پیشان دەدات',
    ],
    steps: [
      {
        title: 'ئینستاڵی Docker',
        detail:
          'Docker لە لینکەکانی سەرەوە دابەزێنە. لەسەر Windows/macOS دۆکەر دێسکتۆپ؛ لەسەر Linux دۆکەر ئێنجن + Compose. بە `docker --version` و `docker compose version` پشتڕاستی بکەرەوە.',
      },
      {
        title: 'وەرگرتنی پڕۆژەکە',
        detail:
          'https://github.com/SarhadCodes/Kurdlogs-core.git کلۆن بکە پاشان تێرمیناڵ لە ڕەگەی پڕۆژەکە بکەرەوە (ئەو فۆڵدەرەی `docker-compose.yml`ی تێدایە).',
      },
      {
        title: 'ڕێکخستنی ژینگە (ئارەزوومەندانە)',
        detail:
          'ئەگەر هەبوو `.env.example` بکۆپی بکە بۆ `.env`، یان `.env` دروست بکە بە `JWT_SECRET`، `POSTGRES_PASSWORD`، و `HTTP_PORT=8081`. ڕێکخستنە بنەڕەتییەکان بۆ تاقیکردنەوەی ناوخۆ کار دەکەن.',
      },
      {
        title: 'دروستکردن و هەڵکردن',
        detail:
          'لەسەر Windows فەرمانی `.\\deploy-local.cmd` جێبەجێ بکە. لەسەر Linux/VPS فەرمانی `sudo ./install.sh`. یان `docker compose build` پاشان `docker compose up -d`. چاوەڕوانی تەندروستی Postgres بکە.',
      },
      {
        title: 'کردنەوەی پانێڵ',
        detail:
          'سەردانی http://localhost:8081 بکە (یان `HTTP_PORT`ـەکەت). دوای یەکەم بیلد جارێک نوێکردنەوەی تەواو بکە. بە admin / admin123 بچۆ ژوورەوە.',
      },
      {
        title: 'پاراستن و پشتڕاستکردنەوە',
        detail:
          'وشەی نهێنی ئەدمین لە Settings بگۆڕە. کەناڵ یان پلەیلیستێک دروست بکە، دڵنیابە چاودێری CPU/میمۆری پیشان دەدات، و دوای نوێکردنەوە وەشانی بیلدی سایدبار بپشکنە.',
      },
    ],
    commandLabels: [
      'کلۆنکردنی ڕێپۆزیتۆری',
      'Windows (CLIـی براندکراو)',
      'Linux / VPS (CLIـی براندکراو)',
      'Docker Compose',
      'پشکنینی دۆخ',
    ],
    requirements: [
      {
        name: 'کوردلۆگز کۆر',
        platform: 'GitHub',
        detail: 'ڕێپۆزیتۆری فەرمی کلۆن بکە — سۆرس، فایلەکانی Docker Compose، و سکریپتەکانی ئینستاڵ.',
        cta: 'کردنەوە لە GitHub',
      },
      {
        name: 'Docker Desktop',
        platform: 'Windows و macOS',
        detail: 'Docker Engine و Compose لەخۆدەگرێت — ئاسانترین ڕێگا بۆ بەڕێوەبردنی کوردلۆگز لە ناوخۆ.',
        cta: 'دابەزاندنی Docker Desktop',
      },
      {
        name: 'Docker Engine',
        platform: 'Linux / VPS',
        detail: 'Engine لەگەڵ پلاگینی Compose بۆ سێرڤەرەکان ئینستاڵ بکە. ڕێنمایی دیسترۆکەت شوێن بکەوە.',
        cta: 'ئینستاڵی Docker Engine',
      },
      {
        name: 'Git',
        platform: 'هەموو پلاتفۆرمەکان',
        detail: 'پێویستە بۆ کلۆنکردنی ڕێپۆزیتۆری کوردلۆگز کۆر لە GitHub.',
        cta: 'دابەزاندنی Git',
      },
      {
        name: 'WSL 2',
        platform: 'Windows',
        detail: 'لەسەر Windows لەلایەن Docker Desktopەوە داوا دەکرێت. ئەگەر ئینستاڵی Docker داوای کرد، ئینستاڵی بکە.',
        cta: 'ئینستاڵی WSL',
      },
    ],
  },
  gallery: {
    view: 'بینین',
    previous: 'پێشوو',
    next: 'دواتر',
    close: 'داخستن',
    openFull: 'کردنەوەی {title} بە قەبارەی تەواو',
    show: 'پیشاندانی {title}',
    shots: [
      {
        alt: 'نیشاندەری داشبۆردی کوردلۆگز کۆر',
        title: 'داشبۆرد',
        caption: 'تەندروستی کەناڵ، ئاپتایم، و ژێرخان لە یەک نیگادا.',
      },
      {
        alt: 'پێشبینینی زیندووی کەناڵ لەگەڵ پێوەرەکان',
        title: 'کەناڵەکان',
        caption: 'پێشبینینی ستریم لەگەڵ CPU، بیتڕەیت، و تەندروستی لە یەک شوێن.',
      },
      {
        alt: 'شاشەی بەڕێوەبردنی پلەیلیست',
        title: 'پلەیلیستەکان',
        caption: 'خشتەی ٢٤/٧ دروست بکە بە لووپ و ڕیزبەندی بابەتەکان.',
      },
      {
        alt: 'دیزاینەری بلۆپرینتی کەناڵ',
        title: 'بلۆپرینتەکان',
        caption: 'هەڵسوکەوتی کەناڵ دیزاین بکە بەبێ نووسینی گرافی FFmpeg بە دەست.',
      },
      {
        alt: 'نیشاندەری چاودێری سیستەم',
        title: 'چاودێری',
        caption: 'دۆخی CPU، میمۆری، و پلەیباکی کەناڵ لە کاتی ڕاستەقینەدا.',
      },
    ],
  },
  features: [
    {
      title: 'کۆنترۆڵی کەناڵ',
      body: 'M3U8، MP4، RTMP و زیاتر لە یەک پانێڵی ئۆپەرەیتەر بەڕێوەیانبە کە بۆ تیمەکانی پەخش دروست کراوە.',
    },
    {
      title: 'پلەیلیستی ٢٤/٧',
      body: 'کەناڵی بەردەوام خشتە بکە بە پلەیلیستی لووپ و بلۆپرینت کە ناوەڕۆک بە جوڵە دەهێڵنەوە.',
    },
    {
      title: 'ترانسکۆدی زیندوو',
      body: 'نەردەبانی HLSـی گونجاو لەڕێگەی FFmpegەوە بۆ ئەوەی هەر شاشەیەک کوالیتی گونجاو وەربگرێت.',
    },
    {
      title: 'گەیاندنی پارێزراو',
      body: 'URLـی HLSـی تۆکنکراو لەگەڵ نوێکردنەوەی خۆکار بۆ ئەوەی ستریم پارێزراو بێت بەبێ تێکدانی پلەیەر.',
    },
    {
      title: 'ئۆڤەرلەی و براندینگ',
      body: 'لۆگۆ، نیشانی LIVE، و پڕۆفایلی براند لەو شوێنەی بینەر دەیبینێت جێگیر بکە.',
    },
    {
      title: 'چاودێری ئۆپەرەیتەر',
      body: 'CPU، RAM، بیتڕەیت، و FPS لەڕێگەی WebSocketەوە بۆ ئەوەی پێش بینەر کێشە ببینیتەوە.',
    },
  ],
};

export const messages: Record<'en' | 'ckb', Messages> = { en, ckb };
