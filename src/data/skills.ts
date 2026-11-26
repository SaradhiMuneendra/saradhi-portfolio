export interface Skill {
  name: string;
  category: string;
  description: string;
}

export const skills: Skill[] = [
  // 1. Frontend Frameworks
  {
    name: 'Angular 10–18',
    category: 'Frontend Frameworks',
    description: 'Enterprise application development, architecture and version migrations',
  },
  {
    name: 'React.js',
    category: 'Frontend Frameworks',
    description: 'Component-based UI development and responsive web applications',
  },

  // 2. Core Frontend
  {
    name: 'TypeScript',
    category: 'Core Frontend',
    description: 'Strongly typed application development',
  },
  {
    name: 'JavaScript',
    category: 'Core Frontend',
    description: 'Modern ES6+ development and asynchronous programming',
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

  // 3. UI Component Libraries
  {
    name: 'Angular Material',
    category: 'UI Component Libraries',
    description: 'Reusable and responsive enterprise UI components',
  },
  {
    name: 'PrimeNG',
    category: 'UI Component Libraries',
    description: 'Rich UI components for enterprise applications',
  },

  // 4. State Management
  {
    name: 'RxJS',
    category: 'State Management',
    description: 'Reactive programming and asynchronous data streams',
  },
  {
    name: 'NgRx',
    category: 'State Management',
    description: 'Predictable state management using actions, reducers and effects',
  },

  // 5. Backend Development
  // {
  //   name: 'Python',
  //   category: 'Backend Development',
  //   description: 'Backend development and business logic implementation',
  // },
  // {
  //   name: 'FastAPI',
  //   category: 'Backend Development',
  //   description: 'REST API development and backend application architecture',
  // },
  // {
  //   name: 'Pydantic',
  //   category: 'Backend Development',
  //   description: 'Request validation, data models and schema management',
  // },
  // {
  //   name: 'Node.js',
  //   category: 'Backend Development',
  //   description: 'Backend API development using JavaScript',
  // },

  // 6. Databases
  // {
  //   name: 'MySQL',
  //   category: 'Databases',
  //   description: 'Relational database management and SQL queries',
  // },
  // {
  //   name: 'SQL Server',
  //   category: 'Databases',
  //   description: 'Relational database operations and data management',
  // },

  // 7. API & Real-time Communication
  {
    name: 'REST APIs',
    category: 'API & Real-time Communication',
    description: 'RESTful API development and frontend integration',
  },
  {
    name: 'GraphQL / Apollo',
    category: 'API & Real-time Communication',
    description: 'GraphQL queries, mutations and API integration',
  },
  {
    name: 'WebSockets',
    category: 'API & Real-time Communication',
    description: 'Real-time application communication',
  },
  {
    name: 'STOMP',
    category: 'API & Real-time Communication',
    description: 'Real-time messaging over WebSocket connections',
  },

  // 8. Security
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
  {
    name: 'RBAC',
    category: 'Security',
    description: 'Role-based access control and permission management',
  },

  // 9. Data Visualization
  {
    name: 'Chart.js',
    category: 'Data Visualization',
    description: 'Interactive charts and dashboard visualizations',
  },
  {
    name: 'Apache ECharts',
    category: 'Data Visualization',
    description: 'Interactive and customizable enterprise data visualizations',
  },
  {
    name: 'Highcharts',
    category: 'Data Visualization',
    description: 'Responsive charts and analytical dashboards',
  },
  {
    name: 'D3.js',
    category: 'Data Visualization',
    description: 'Custom data-driven visualizations',
  },

  // 10. AI Integration
  {
    name: 'AI Chatbot Integration',
    category: 'AI Integration',
    description: 'Integrating AI-powered chatbots with application APIs and backend services',
  },

  // 11. Testing
  {
    name: 'Jasmine',
    category: 'Testing',
    description: 'Unit testing for frontend applications',
  },
  {
    name: 'Karma',
    category: 'Testing',
    description: 'Browser-based test execution and automation',
  },

  // 12. Monitoring & Error Tracking
  {
    name: 'Sentry',
    category: 'Monitoring & Error Tracking',
    description: 'Application error tracking, performance monitoring and issue diagnostics',
  },

  // 13. Development Tools
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

  // 14. AI-Assisted Development
  {
    name: 'GitHub Copilot',
    category: 'AI-Assisted Development',
    description: 'AI-assisted coding and development productivity',
  },
  {
    name: 'ChatGPT',
    category: 'AI-Assisted Development',
    description: 'AI-assisted problem solving and development',
  },
  {
    name: 'Claude Code',
    category: 'AI-Assisted Development',
    description: 'AI-assisted coding and software development',
  },
]