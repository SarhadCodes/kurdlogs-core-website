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
    title: 'کوردلۆگز کۆر — کۆنترۆڵی پەخش، خۆمێوانداری',
    description:
      'کوردلۆگز کۆر — کۆنترۆڵی IPTV و پەخشی خۆمێوانداری. کەناڵ، پلەیلیست، بلۆپرینت، ترانسکۆد، و چاودێری لە یەک پانێڵدا.',
  },
  nav: {
    product: 'بەرهەم',
    about: 'دەربارە',
    team: 'تیم',
    faq: 'پرسیارەکان',
    docs: 'بەڵگەنامە',
    installGuide: 'ڕێنمایی دامەزراندن',
    openMenu: 'کردنەوەی مێنیو',
    closeMenu: 'داخستنی مێنیو',
    language: 'زمان',
  },
  footer: {
    blurb: 'کۆنترۆڵی پەخشی خۆمێوانداری بۆ کەناڵ، پلەیلیست، و تەلەڤیزیۆنی بەردەوام.',
    about: 'دەربارە',
    team: 'تیم',
    faq: 'پرسیارەکان',
    docs: 'بەڵگەنامە',
    copyright: '© {year} کوردلۆگز کۆر. مۆڵەتی MIT.',
  },
  hero: {
    tagline:
      'کۆنترۆڵی پەخشی خۆمێوانداری بۆ ئۆپەرەیتەرەکان کە پێویستیان بە کەناڵ، پلەیلیست، و تەلەڤیزیۆنی بەردەوامە — بەبێ دەنگەدەنگ.',
    cta: 'دامەزراندنی کوردلۆگز',
    hint: 'گڵۆب ڕابکێشە · نیشانەکەر بجوڵێنە',
  },
  home: {
    galleryEyebrow: 'گەلەری',
    galleryTitle: 'پانێڵەکە ببینە',
    galleryDescription:
      'سکرینشاتە ڕاستەقینەکانی کوردلۆگز کۆر بگەڕێ — داشبۆرد، کەناڵ، پلەیلیست، بلۆپرینت، و چاودێری.',
    capabilitiesEyebrow: 'تواناکان',
    capabilitiesTitle: 'هەموو ئەوەی کە ستاکێکی مۆدێرنی کەناڵ پێویستی پێیەتی',
    capabilitiesDescription: 'یەک ڕووی کۆنترۆڵ بۆ وەرگرتن، خشتە، گەیاندن، و تەندروستی سیستەم.',
    ctaTitle: 'ئامادەیت پانێڵی خۆت بەڕێوە ببەیت؟',
    ctaBody: 'ڕێنمایی هەنگاو بە هەنگاوی دامەزراندن شوێن بکەوە و لە چەند خولەکدا لە localhost:8081 بیت.',
    openDocs: 'کردنەوەی بەڵگەنامە',
    meetTeam: 'ناسینی تیم',
  },
  about: {
    eyebrow: 'دەربارە',
    title: 'نەرمەکاڵای پەخش بە بیرکردنەوەی ئۆپەرەیتەر',
    description:
      'کوردلۆگز کۆر هەیە بۆ ئەوەی تیمەکانی میدیا بتوانن کەناڵی بەردەوام بەڕێوە ببەن بەبێ پێکەوەنانی سکریپتی لاواز و داشبۆردی جیاواز.',
    p1: 'کوردلۆگز کۆر پانێڵێکی خۆمێوانداری IPTV و شێوازی MCRـە. کەناڵ، پلەیلیست، بلۆپرینت، ترانسکۆد، ئۆڤەرلەی، تۆکن، و چاودێری دەهێنێتە ناو یەک ڕووکاری تاریک و سەرنجتێدا.',
    p2: 'بەرهەمەکە بۆ ئەوانە دروستکراوە کە ستریم لەسەر هەوا دەهێڵنەوە — نەک بۆ پڕۆزێنتەیشن. دۆکەر کۆمپۆز PostgreSQL، API، پانێڵی React، و NGINX RTMP دەهێنێت بۆ ئەوەی لەناوخۆ یان لەسەر VPS لە تەنیشت سێرڤەری میدیای هەبوو دایبمەزرێنیت.',
    p3: 'پۆرتە بنەڕەتییەکان لە ڕێگای ستاکە باوەکان دوور دەبن (HTTP 8081، RTMP 1936). بنەڕەتەکان زوو چوونەژوورەوەت بۆ دەکەن؛ ڕێکخستن و گۆڕاوەکانی ژینگە دامەزراندن بۆ پرۆداکشن بەهێز دەکەن.',
    imageAlt: 'نیشاندانی چاودێری لە کوردلۆگز کۆر',
    pillars: [
      {
        title: 'خۆمێوانداری',
        body: 'میدیا، تۆکن، و ناسنامەکانت لەسەر ژێرخانی خۆت دەمێننەوە.',
      },
      {
        title: 'ئۆپەرەیتەر-یەکەم',
        body: 'داشبۆرد، پێشبینین، و نیشانەکانی تەندروستی بۆ ئەوانە دروستکراون کە کەناڵ دەبینن، نەک تەنها چارت.',
      },
      {
        title: 'کۆری کراوە',
        body: 'مۆڵەتی MIT. بلۆپرینت، ئۆڤەرلەی، و سکریپتی دامەزراندن درێژ بکەرەوە بۆ ئەوەی لەگەڵ سیستەمەکەت بگونجێت.',
      },
    ],
    meetTeam: 'ناسینی تیم',
  },
  team: {
    eyebrow: 'تیم',
    title: 'کەسانی پشت پانێڵەکە',
    description: 'دروستکردنی کوردلۆگز کۆر بۆ ئۆپەرەیتەرەکان کە کەناڵ لەسەر هەوا دەهێڵنەوە.',
    members: [
      {
        name: 'سەرهەد',
        role: 'دامەزرێنەر و بەڕێوەبەری جێبەجێکار',
        bio: 'سەرکردایەتی کوردلۆگز کۆر دەکات لە سەرەتاوە تا کۆتایی — ئاراستەی بەرهەم، ئەزموونی ئۆپەرەیتەر، و ستاکی خۆمێوانداری کە کەناڵ لەسەر هەوا دەهێڵێتەوە.',
      },
      {
        name: 'تیمی کوردلۆگز',
        role: 'ئەندازیاری و کارگێڕی',
        bio: 'پانێڵەکە دروست دەکات و بەڕێوەی دەبات: هێڵی ستریم، گەیاندنی دۆکەر، چاودێری، و ئەو ئامرازانەی تیمەکانی پەخش هەموو ڕۆژێک بەکاریان دەهێنن.',
      },
    ],
  },
  faq: {
    eyebrow: 'پرسیارەکان',
    title: 'وەڵام پێش دامەزراندن',
    description:
      'پرسیارە باوەکان دەربارەی میوانداری، چوونەژوورەوە، پۆرت، و ئەوەی کوردلۆگز کۆر بۆی دروستکراوە.',
    stillTitle: 'هێشتا دادەمەزرێنیت؟',
    stillBody:
      'بەڵگەنامەکە هەنگاو بە هەنگاو ڕێنمایی ڕێکخستنی دۆکەر، یەکەم چوونەژوورەوە، و پشتڕاستکردنەوە دەکات.',
    goDocs: 'بڕۆ بۆ بەڵگەنامە',
    items: [
      {
        q: 'کوردلۆگز کۆر چییە؟',
        a: 'کوردلۆگز کۆر پانێڵێکی خۆمێوانداری IPTV و کۆنترۆڵی پەخشە. یارمەتیت دەدات کەناڵ، پلەیلیست، بلۆپرینت، ترانسکۆد، ئۆڤەرلەی، تۆکن، و چاودێری لە یەک ڕووکاری مۆدێرندا بەڕێوە ببەیت.',
      },
      {
        q: 'ئایا خۆمێواندارییە؟',
        a: 'بەڵێ. لەسەر ئامێر یان VPSـی خۆت بە دۆکەر بەڕێوەی دەبەیت. میدیا، ناسنامە، و ستریمەکانت لەژێر کۆنترۆڵی خۆتدا دەمێننەوە.',
      },
      {
        q: 'بۆ دامەزراندنی چیم پێویستە؟',
        a: 'دۆکەر و دۆکەر کۆمپۆز (هەروەها گیت بۆ کلۆنکردنی ڕێپۆ). لەسەر ویندۆز/ماک دۆکەر دێسکتۆپ دابەزێنە؛ لەسەر لینوکس دۆکەر ئێنجن دابمەزرێنە. پەڕەی بەڵگەنامە لینکی ڕاستەوخۆی هەیە. ستاکەکە PostgreSQL، API، پانێڵ، و NGINX RTMP لەخۆدەگرێت.',
      },
      {
        q: 'یەکەم جار چۆن بچمە ژوورەوە؟',
        a: 'دوای هەڵکردنی کۆنتەینەرەکان، URLـی پانێڵ بکەرەوە (بنەڕەت http://localhost:8081) و بە admin / admin123 بچۆ ژوورەوە. دەستبەجێ وشەی نهێنی لە ڕێکخستن بگۆڕە.',
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
        a: 'پڕۆژەکە مۆڵەتی MITـی هەیە. دەتوانیت بەکاری بهێنیت، بیگۆڕیت، و بۆ کارەکانی پەخشی خۆت دایبمەزرێنیت.',
      },
    ],
  },
  docs: {
    eyebrow: 'بەڵگەنامە',
    title: 'دامەزراندنی کوردلۆگز کۆر هەنگاو بە هەنگاو',
    description: 'لە دۆکەرەوە تا یەکەم چوونەژوورەوە. ئەم هەنگاوانە لەسەر ئامێری ناوخۆ یان VPS شوێن بکەوە.',
    tutorialEyebrow: 'فێرکاری',
    tutorialTitle: 'ڤیدیۆی دامەزراندن ببینە',
    tutorialDescription:
      'فەرمانە ڕاستەقینەکانی دۆکەر لەم ئامێرە، پاشان پانێڵی زیندووی کوردلۆگز لە localhost:8081.',
    videoFallback: 'وێبگەڕەکەت پشتگیری ڤیدیۆی ناوخۆ ناکات.',
    tutorialNote:
      'بەشی تێرمیناڵ دەرچوونی ڕاستەقینەی docker / docker composeی ئەم پڕۆژەیە پیشان دەدات، پاشان پانێڵی کارا.',
    prereqEyebrow: 'پێداویستییەکان',
    prereqTitle: 'ئەوەی پێویستتە دابەزێنە',
    prereqDescription:
      'ئامرازەکانی خوارەوە وەربگرە، پاشان بەردەوام بە لەگەڵ هەنگاوەکانی دامەزراندن. هەر لینکێک پەڕەی فەرمی دابەزاندن دەکاتەوە.',
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
      'بۆ ئاسانترین دووبارە دروستکردنەوەی ناوخۆ سکریپتی ویندۆز بەکاربهێنە، یان ڕاستەوخۆ کۆمپۆز.',
    copy: 'کۆپی',
    copied: 'کۆپی کرا',
    defaultLogin: 'چوونەژوورەوەی بنەڕەتی',
    username: 'ناوی بەکارهێنەر',
    password: 'وشەی نهێنی',
    changePassword: 'دوای یەکەم چوونەژوورەوەی سەرکەوتوو دەستبەجێ ئەمە لە ڕێکخستن بگۆڕە.',
    openPanel: 'کردنەوەی پانێڵ لە {host}',
    githubRepo: 'ڕێپۆزیتۆری گیتهاب',
    verifyEyebrow: 'پشتڕاستکردنەوە',
    verifyTitle: 'دڵنیابە دامەزراندن سەرکەوتوو بوو',
    verifyItems: [
      'دوای نوێکردنەوەی توند، سایدبار وەشانی بیلد پیشان دەدات',
      'داشبۆرد ژمارە و دۆخی کەناڵەکان بار دەکات',
      'چاودێری پێوەرەکانی CPU و میمۆری پیشان دەدات',
    ],
    steps: [
      {
        title: 'دامەزراندنی دۆکەر',
        detail:
          'دۆکەر لە لینکەکانی سەرەوە دابەزێنە. لەسەر ویندۆز/ماک دۆکەر دێسکتۆپ؛ لەسەر لینوکس دۆکەر ئێنجن + کۆمپۆز. بە `docker --version` و `docker compose version` پشتڕاستی بکەرەوە.',
      },
      {
        title: 'وەرگرتنی پڕۆژەکە',
        detail:
          'https://github.com/SarhadCodes/Kurdlogs-core.git کلۆن بکە پاشان تێرمیناڵ لە ڕەگەی پڕۆژەکە بکەرەوە (ئەو فۆڵدەرەی `docker-compose.yml`ی تێدایە).',
      },
      {
        title: 'ڕێکخستنی ژینگە (ئارەزوومەندانە)',
        detail:
          'ئەگەر هەبوو `.env.example` بکۆپی بکە بۆ `.env`، یان `.env` دروست بکە بە `JWT_SECRET`، `POSTGRES_PASSWORD`، و `HTTP_PORT=8081`. بنەڕەتەکان بۆ تاقیکردنەوەی ناوخۆ کار دەکەن.',
      },
      {
        title: 'دروستکردن و هەڵکردن',
        detail:
          'لەسەر ویندۆز `.\\deploy-local.cmd` جێبەجێ بکە. لەسەر لینوکس/VPS `sudo ./install.sh`. یان `docker compose build` پاشان `docker compose up -d`. چاوەڕوانی تەندروستی Postgres بکە.',
      },
      {
        title: 'کردنەوەی پانێڵ',
        detail:
          'سەردانی http://localhost:8081 بکە (یان `HTTP_PORT`ـەکەت). دوای یەکەم بیلد جارێک نوێکردنەوەی توند بکە. بە admin / admin123 بچۆ ژوورەوە.',
      },
      {
        title: 'پاراستن و پشتڕاستکردنەوە',
        detail:
          'وشەی نهێنی ئەدمین لە ڕێکخستن بگۆڕە. کەناڵ یان پلەیلیستێک دروست بکە، دڵنیابە چاودێری CPU/میمۆری پیشان دەدات، و دوای نوێکردنەوە وەشانی بیلدی سایدبار بپشکنە.',
      },
    ],
    commandLabels: [
      'کلۆنکردنی ڕێپۆزیتۆری',
      'ویندۆز (CLIـی براندکراو)',
      'لینوکس / VPS (CLIـی براندکراو)',
      'دۆکەر کۆمپۆز',
      'پشکنینی دۆخ',
    ],
    requirements: [
      {
        name: 'کوردلۆگز کۆر',
        platform: 'گیتهاب',
        detail: 'ڕێپۆزیتۆری فەرمی کلۆن بکە — سۆرس، فایلی دۆکەر کۆمپۆز، و سکریپتی دامەزراندن.',
        cta: 'کردنەوە لە گیتهاب',
      },
      {
        name: 'دۆکەر دێسکتۆپ',
        platform: 'ویندۆز و ماک',
        detail: 'دۆکەر ئێنجن و کۆمپۆز لەخۆدەگرێت — ئاسانترین ڕێگا بۆ بەڕێوەبردنی کوردلۆگز لەناوخۆ.',
        cta: 'دابەزاندنی دۆکەر دێسکتۆپ',
      },
      {
        name: 'دۆکەر ئێنجن',
        platform: 'لینوکس / VPS',
        detail: 'ئێنجن لەگەڵ پلاگینی کۆمپۆز بۆ سێرڤەرەکان دابمەزرێنە. ڕێنمایی دیسترۆکەت شوێن بکەوە.',
        cta: 'دامەزراندنی دۆکەر ئێنجن',
      },
      {
        name: 'گیت',
        platform: 'هەموو پلاتفۆرمەکان',
        detail: 'پێویستە بۆ کلۆنکردنی ڕێپۆزیتۆری کوردلۆگز کۆر لە گیتهاب.',
        cta: 'دابەزاندنی گیت',
      },
      {
        name: 'WSL 2',
        platform: 'ویندۆز',
        detail: 'لەسەر ویندۆز لەلایەن دۆکەر دێسکتۆپەوە داوا دەکرێت. ئەگەر دامەزراندنی دۆکەر داوای کرد دایبمەزرێنە.',
        cta: 'دامەزراندنی WSL',
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
        alt: 'نیشاندانی داشبۆردی کوردلۆگز کۆر',
        title: 'داشبۆرد',
        caption: 'تەندروستی کەناڵ، ئاپتایم، و ژێرخان لە یەک نیگا.',
      },
      {
        alt: 'پێشبینینی زیندووی کەناڵ لەگەڵ پێوەرەکان',
        title: 'کەناڵەکان',
        caption: 'پێشبینینی ستریم لەگەڵ CPU، بیتڕەیت، و تەندروستی لە یەک شوێن.',
      },
      {
        alt: 'شاشەی بەڕێوەبردنی پلەیلیست',
        title: 'پلەیلیستەکان',
        caption: 'خشتەی ٢٤/٧ دروست بکە بە لووپ و ڕیزبەندی ئایتمەکان.',
      },
      {
        alt: 'دیزاینەری بلۆپرینتی کەناڵ',
        title: 'بلۆپرینتەکان',
        caption: 'هەڵسوکەوتی کەناڵ دیزاین بکە بەبێ نووسینی گرافی FFmpeg بە دەست.',
      },
      {
        alt: 'نیشاندانی چاودێری سیستەم',
        title: 'چاودێری',
        caption: 'دۆخی CPU، میمۆری، و پلەیباکی کەناڵ لە کاتی ڕاستەقینەدا.',
      },
    ],
  },
  features: [
    {
      title: 'کۆنترۆڵی کەناڵ',
      body: 'M3U8، MP4، RTMP و زیاتر لە یەک پانێڵی ئۆپەرەیتەر بەڕێوە ببە کە بۆ تیمەکانی پەخش دروستکراوە.',
    },
    {
      title: 'پلەیلیستی ٢٤/٧',
      body: 'کەناڵی بەردەوام خشتە بکە بە پلەیلیستی لووپ و بلۆپرینت کە ناوەڕۆک بە جوڵە دەهێڵنەوە.',
    },
    {
      title: 'ترانسکۆدی زیندوو',
      body: 'نەردبانی HLSـی گونجاو لەڕێگەی FFmpegەوە بۆ ئەوەی هەر شاشەیەک کوالێتی گونجاو وەربگرێت.',
    },
    {
      title: 'گەیاندنی پارێزراو',
      body: 'URLـی HLSـی تۆکنکراو لەگەڵ نوێکردنەوەی خۆکار بۆ ئەوەی ستریم پارێزراو بێت بەبێ شکاندنی پلەیەر.',
    },
    {
      title: 'ئۆڤەرلەی و براندینگ',
      body: 'لۆگۆ، نیشانی LIVE، و پڕۆفایلی براند لەو شوێنەی بینەر دەیبینێت جێگیر بکە.',
    },
    {
      title: 'چاودێری ئۆپەرەیتەر',
      body: 'CPU، RAM، بیتڕەیت، و FPS لەڕێگەی WebSocketەوە بۆ ئەوەی پێش بینەر کێشە بگریت.',
    },
  ],
};

export const messages: Record<'en' | 'ckb', Messages> = { en, ckb };
