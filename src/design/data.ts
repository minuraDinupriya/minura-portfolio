export type Project = {
  slug: string
  number: string
  title: string
  subtitle: string
  type: string
  description: string
  contribution: string
  stack: string[]
  repo?: string
  color: string
  features: string[]
  architecture: string[]
  testing: string
  learnings: string
}

export const projects: Project[] = [
  {
    slug: 'tradesphere',
    number: '01',
    title: 'TradeSphere',
    subtitle: 'B2B Commerce & Inventory Management System',
    type: 'Full-Stack Business Application',
    description:
      'A full-stack business management application featuring product catalogs, warehouse inventory, customer management, and order processing.',
    contribution:
      'Developed the application with organization-based access control, transactional stock reservations, order fulfillment workflows, REST APIs, and professional Git/CI workflows.',
    stack: [
      'Java 21',
      'Spring Boot',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Docker',
    ],
    repo: 'https://github.com/minuraDinupriya/tradesphere',
    color: '#8b5cf6',
    features: [
      'Product catalog and customer management',
      'Warehouse inventory and stock visibility',
      'Order processing and fulfillment workflows',
      'Organization-based access control',
      'Transactional stock reservations',
    ],
    architecture: [
      'React + TypeScript',
      'REST API',
      'Spring Boot / Java 21',
      'PostgreSQL',
      'Docker',
    ],
    testing:
      'Automated integration and end-to-end testing supported by Git and CI workflows.',
    learnings:
      'The project strengthened my understanding of transactional business rules, layered system design, and the importance of testing critical inventory workflows.',
  },
  {
    slug: 'smart-lost-and-found-sl',
    number: '02',
    title: 'Sri Lanka Smart Lost & Found',
    subtitle: 'Multilingual Full-Stack Web Platform',
    type: 'Collaborative Full-Stack Platform',
    description:
      'A multilingual platform for item reporting, real-time messaging, and ownership verification.',
    contribution:
      'Contributed to secure verification workflows, data privacy, automated testing, and GitHub Actions CI. This was a collaborative project, not an independent build.',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
    ],
    repo: 'https://github.com/minuraDinupriya/smart-lost-and-found-sl',
    color: '#00e5ff',
    features: [
      'Lost and found item reporting',
      'Real-time user communication',
      'Ownership verification workflows',
      'Multilingual platform experience',
      'Privacy-aware information handling',
    ],
    architecture: [
      'React + TypeScript',
      'Express.js / Node.js',
      'Socket.IO',
      'MongoDB',
      'GitHub Actions',
    ],
    testing:
      'Worked with automated testing and GitHub Actions CI in a collaborative workflow.',
    learnings:
      'The project developed my experience with authentication, database transactions, privacy considerations, and coordinating implementation in a team.',
  },
  {
    slug: 'focuspilot',
    number: '03',
    title: 'FocusPilot',
    subtitle: 'Offline-First Productivity Mobile Application',
    type: 'Mobile Engineering',
    description:
      'A mobile productivity application featuring task management, Pomodoro timers, daily dashboards, and focus analytics.',
    contribution:
      'Developed with Clean Architecture, reactive BLoC state management, local database persistence, automated testing, and CI/CD for Android APK releases.',
    stack: ['Flutter', 'Dart', 'Drift / SQLite', 'BLoC', 'GitHub Actions'],
    repo: 'https://github.com/minuraDinupriya/focuspilot',
    color: '#f6c453',
    features: [
      'Task planning and management',
      'Pomodoro focus timer',
      'Daily productivity dashboard',
      'Focus analytics',
      'Offline-first local persistence',
    ],
    architecture: [
      'Flutter UI',
      'BLoC',
      'Domain / Use Cases',
      'Drift Repository',
      'SQLite',
    ],
    testing:
      'Automated Flutter testing and GitHub Actions CI/CD support Android APK release workflows.',
    learnings:
      'FocusPilot deepened my understanding of clean boundaries, reactive state, dependable offline behavior, and mobile release automation.',
  },
  {
    slug: 'lumosense',
    number: '04',
    title: 'LumoSense',
    subtitle: 'Smart Study Lamp — IoT Project',
    type: 'Embedded Systems',
    description:
      'An Arduino-based smart study lamp with automatic brightness adjustment, posture monitoring, and occupancy detection.',
    contribution:
      'Developed the sensor-driven behavior using Embedded C, focusing on energy efficiency, user comfort, and practical physical computing.',
    stack: ['Arduino', 'Embedded C', 'LDR', 'PIR', 'Ultrasonic Sensors'],
    color: '#ff785a',
    features: [
      'Ambient brightness detection',
      'Automatic light adjustment',
      'Occupancy detection',
      'Posture monitoring',
      'Energy-conscious automation',
    ],
    architecture: [
      'LDR / PIR / Ultrasonic',
      'Arduino Controller',
      'Embedded C Logic',
      'Lamp Output',
    ],
    testing:
      'Interactive behaviors were evaluated across changing light, occupancy, and posture conditions.',
    learnings:
      'LumoSense expanded my perspective beyond software interfaces into sensor integration, automation, and user-focused physical computing.',
  },
]

export const techGroups = [
  {
    title: 'Languages',
    items: [
      'Java',
      'JavaScript',
      'TypeScript',
      'Python',
      'SQL',
      'Dart',
      'Embedded C',
    ],
  },
  {
    title: 'Frameworks',
    items: [
      'Spring Boot',
      'React',
      'Node.js',
      'Express.js',
      'Flutter',
      'REST APIs',
    ],
  },
  { title: 'Data', items: ['PostgreSQL', 'MongoDB', 'SQLite', 'MySQL'] },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Docker',
      'GitHub Actions',
      'Jira',
      'Postman',
      'Figma',
    ],
  },
  {
    title: 'Practices',
    items: [
      'JUnit',
      'Vitest',
      'Playwright',
      'Flutter Testing',
      'Agile & Scrum',
      'CI/CD',
      'OOP',
    ],
  },
]

export const techProjectMap: Record<string, string[]> = {
  Java: ['TradeSphere'],
  'Spring Boot': ['TradeSphere'],
  React: ['TradeSphere', 'Sri Lanka Smart Lost & Found'],
  TypeScript: ['TradeSphere', 'Sri Lanka Smart Lost & Found'],
  PostgreSQL: ['TradeSphere'],
  Docker: ['TradeSphere'],
  'Node.js': ['Sri Lanka Smart Lost & Found'],
  'Express.js': ['Sri Lanka Smart Lost & Found'],
  MongoDB: ['Sri Lanka Smart Lost & Found'],
  Flutter: ['FocusPilot'],
  Dart: ['FocusPilot'],
  SQLite: ['FocusPilot'],
  Arduino: ['LumoSense'],
  'Embedded C': ['LumoSense'],
  'GitHub Actions': ['Sri Lanka Smart Lost & Found', 'FocusPilot'],
  'CI/CD': ['TradeSphere', 'Sri Lanka Smart Lost & Found', 'FocusPilot'],
}
