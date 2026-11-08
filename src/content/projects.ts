export type Project = {
  readonly slug: string
  readonly name: string
  readonly category: string
  readonly summary: string
  readonly stack: readonly string[]
  readonly repository?: string
  readonly overview: string
  readonly highlights: readonly {
    readonly title: string
    readonly detail: string
  }[]
}

export const projects: readonly Project[] = [
  {
    slug: 'tradesphere',
    name: 'TradeSphere',
    category: 'Full-stack web',
    summary: 'A B2B commerce and inventory management system.',
    stack: [
      'Java 21',
      'Spring Boot',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Docker',
    ],
    repository: 'https://github.com/minuraDinupriya/tradesphere',
    overview:
      'TradeSphere models the day-to-day work of a distributor. Organizations manage product catalogs, warehouse stock, customers, and orders in one application. A React client talks to a modular Spring Boot application through REST APIs.',
    highlights: [
      {
        title: 'Reserve stock as part of order processing',
        detail:
          'Stock reservations happen inside a database transaction. Cancelling an eligible order releases its reservation once. Fulfillment reduces physical and reserved stock together.',
      },
      {
        title: 'Keep operations within the organization',
        detail:
          'Organization-scoped access limits which catalog, inventory, and order records an account can use. Automated tests cover order and inventory behavior against PostgreSQL.',
      },
    ],
  },
  {
    slug: 'smart-lost-and-found-sl',
    name: 'Sri Lanka Smart Lost & Found',
    category: 'Collaborative web app',
    summary:
      'A multilingual platform for reporting lost and found items in Sri Lanka.',
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
    ],
    repository: 'https://github.com/minuraDinupriya/smart-lost-and-found-sl',
    overview:
      'People report lost and found items, find matching reports, and coordinate returns. The interface supports English, Sinhala, and Tamil, with real-time messaging and ownership verification.',
    highlights: [
      {
        title: 'Check ownership privately',
        detail:
          'Claimants can supply evidence of ownership without publishing private details in the listing. The server checks access to conversations and verifies claims without returning the private answers.',
      },
      {
        title: 'Keep return completion safe to retry',
        detail:
          'A MongoDB transaction updates return records, item status, and rewards together. Integration tests cover retries, concurrent completion, and rollback.',
      },
    ],
  },
  {
    slug: 'focuspilot',
    name: 'FocusPilot',
    category: 'Mobile app',
    summary:
      'An offline-first mobile app for tasks, focus sessions, and productivity analytics.',
    stack: ['Flutter', 'Dart', 'Drift/SQLite', 'BLoC', 'GitHub Actions'],
    repository: 'https://github.com/minuraDinupriya/focuspilot',
    overview:
      'FocusPilot combines task management with Pomodoro timers and a dashboard for focus trends. Local storage lets the core experience work without a network connection.',
    highlights: [
      {
        title: 'Keep the timer logic separate from the UI',
        detail:
          'BLoC manages work and break states. Completed sessions are saved to SQLite and are available to the dashboard and focus analytics.',
      },
      {
        title: 'Organize code by feature',
        detail:
          'Clean Architecture separates presentation, domain rules, and data access. Repository contracts keep local persistence details out of the UI, and GitHub Actions runs Flutter checks.',
      },
    ],
  },
  {
    slug: 'lumosense',
    name: 'LumoSense',
    category: 'Embedded system',
    summary:
      'An Arduino-based study lamp that reacts to the room and the person using it.',
    stack: ['Arduino', 'Embedded C', 'LDR', 'PIR', 'Ultrasonic Sensors'],
    overview:
      'LumoSense combines automatic brightness adjustment, posture monitoring, and occupancy detection in a smart study lamp.',
    highlights: [
      {
        title: 'Respond to changing light',
        detail:
          'A light-dependent resistor measures ambient light so the lamp can adjust its brightness.',
      },
      {
        title: 'Sense occupancy and distance',
        detail:
          'A passive infrared sensor detects presence, and an ultrasonic sensor measures distance for posture monitoring.',
      },
    ],
  },
]

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
