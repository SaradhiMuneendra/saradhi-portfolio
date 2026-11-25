export interface Skill {
  name: string;
  category: string;
  description: string;
}

export const skills: Skill[] = [
  {
    name: 'Angular 10–18',
    category: 'Frontend Frameworks',
    description: 'Enterprise application development and architecture',
  },
  {
    name: 'React.js',
    category: 'Frontend Frameworks',
    description: 'Component-based UI development and AI chatbot interfaces',
  },

  // Core Frontend
  {
    name: 'TypeScript',
    category: 'Core Frontend',
    description: 'Strongly typed application development',
  },
  {
    name: 'JavaScript',
    category: 'Core Frontend',
    description: 'Modern ES6+ development',
  },
  {
    name: 'HTML5',
    category: 'Core Frontend',
    description: 'Semantic and accessible web development',
  },
  {
    name: 'CSS3',
    category: 'Core Frontend',
    description: 'Responsive layouts and modern styling',
  },
  {
    name: 'SCSS',
    category: 'Core Frontend',
    description: 'Maintainable styling and reusable CSS architecture',
  },

  // UI Frameworks
  {
    name: 'Angular Material',
    category: 'UI Frameworks',
    description: 'Reusable enterprise UI components',
  },
  {
    name: 'PrimeNG',
    category: 'UI Frameworks',
    description: 'Rich UI components for enterprise applications',
  },

  // State Management & Reactive Programming
  {
    name: 'RxJS',
    category: 'State Management',
    description: 'Reactive programming and asynchronous data streams',
  },
  {
    name: 'NgRx',
    category: 'State Management',
    description: 'Predictable state management for Angular applications',
  },

  // API Integration
  {
    name: 'REST APIs',
    category: 'API Integration',
    description: 'Frontend API integration and data communication',
  },
  {
    name: 'GraphQL / Apollo',
    category: 'API Integration',
    description: 'GraphQL queries, mutations and API integration',
  },
  {
    name: 'WebSockets',
    category: 'API Integration',
    description: 'Real-time application communication',
  },

  // Security
  {
    name: 'OAuth2',
    category: 'Security',
    description: 'Secure authentication and authorization flows',
  },
  {
    name: 'JWT',
    category: 'Security',
    description: 'Token-based authentication and access control',
  },

  // Testing
  {
    name: 'Jasmine',
    category: 'Testing',
    description: 'Unit testing for frontend applications',
  },
  // {
  //   name: 'Karma',
  //   category: 'Testing',
  //   description: 'Test execution and browser-based test automation',
  // },

  // Development Tools
  {
    name: 'Git',
    category: 'Development Tools',
    description: 'Version control and source code management',
  },
  {
    name: 'GitHub',
    category: 'Development Tools',
    description: 'Code hosting and collaboration',
  },
  {
    name: 'Jira',
    category: 'Development Tools',
    description: 'Agile project and task management',
  },
  {
    name: 'Postman',
    category: 'Development Tools',
    description: 'REST API testing and debugging',
  },

  // AI-Assisted Development
  {
    name: 'GitHub Copilot',
    category: 'AI Development Tools',
    description: 'AI-assisted coding and development productivity',
  },
  {
    name: 'ChatGPT',
    category: 'AI Development Tools',
    description: 'AI-assisted problem solving and development',
  },
  {
    name: 'Claude Code',
    category: 'AI Development Tools',
    description: 'AI-assisted coding and software development',
  },
]