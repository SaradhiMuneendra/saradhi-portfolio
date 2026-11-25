export interface Skill {
  name: string;
  category: string;
  description: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'Angular 10–18',
    category: 'Frontend',
    description: 'Enterprise application development',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Strongly typed application development',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    description: 'Modern ES6+ development',
  },
  {
    name: 'React.js',
    category: 'Frontend',
    description: 'Component-based UI development',
  },
  {
    name: 'HTML5 / CSS3',
    category: 'Frontend',
    description: 'Responsive web development',
  },
  {
    name: 'SCSS',
    category: 'Frontend',
    description: 'Maintainable styling and layouts',
  },

  // UI Frameworks
  {
    name: 'Angular Material',
    category: 'UI Frameworks',
    description: 'Reusable UI components',
  },
  {
    name: 'PrimeNG',
    category: 'UI Frameworks',
    description: 'Enterprise UI components',
  },

  // State Management
  {
    name: 'RxJS',
    category: 'State Management',
    description: 'Reactive programming and asynchronous streams',
  },
  {
    name: 'NgRx',
    category: 'State Management',
    description: 'Predictable enterprise state management',
  },

  // Backend
  {
    name: 'Python',
    category: 'Backend',
    description: 'Backend application development',
  },
  {
    name: 'FastAPI',
    category: 'Backend',
    description: 'REST API and backend development',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'Server-side JavaScript development',
  },
  {
    name: 'Pydantic',
    category: 'Backend',
    description: 'Request validation and data models',
  },

  // Database
  {
    name: 'MySQL',
    category: 'Database',
    description: 'Relational database management',
  },
  {
    name: 'SQL Server',
    category: 'Database',
    description: 'Relational database management',
  },

  // API Integration
  {
    name: 'REST APIs',
    category: 'API Integration',
    description: 'Frontend and backend integration',
  },
  {
    name: 'GraphQL / Apollo',
    category: 'API Integration',
    description: 'GraphQL API integration',
  },
  {
    name: 'WebSockets',
    category: 'API Integration',
    description: 'Real-time application communication',
  },

  // Security
  {
    name: 'OAuth2 / JWT',
    category: 'Security',
    description: 'Authentication and authorization',
  },
]