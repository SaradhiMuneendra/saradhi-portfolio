
export interface Project {
  title: string;
  type: string;
  description: string;
  technologies: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    title: 'DarkEye - Vendor Risk Management Platform',
    type: 'Professional Project',
    description:
      'An enterprise cybersecurity and Vendor Risk Management platform designed to assess vendor security posture, monitor cyber threats, identify vulnerabilities, and provide actionable risk insights through interactive dashboards, analytics, and reporting. Contributed to frontend development using Angular and React.',
    technologies: [
      'Angular 18',
      'React.js',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'NgRx',
      'HTML5',
      'CSS3',
      'SCSS',
      'PrimeNG',
      'WebSockets',
      'OAuth2 / JWT',
      'GraphQL / Apollo',
      'Chart.js',
      'Highcharts',
      'ECharts',
      'D3.js',
      'Jasmine',
      'Karma',
    ],
    features: [
      'Vendor Risk Management',
      'Cyber Threat Intelligence',
      'Dark Web Monitoring',
      'SBOM and Code Security',
      'Interactive Risk Dashboards',
      'Data Visualization and Reporting',
      'Role-Based Access Control',
      'Real-Time Notifications',
      'Angular Migration and Performance Optimization',
      'Reusable UI Components',
    ],
  },
  {
    title: 'Pulse - Network Security Dashboard',
    type: 'Professional Project',
    description:
      'An enterprise network security dashboard designed to monitor assets, vulnerabilities, security alerts, investigations, and analytics. Developed dynamic and responsive frontend modules using Angular and React, delivering interactive dashboards, reusable components, and data-driven user experiences.',
    technologies: [
      'Angular 10–14',
      'React.js',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'HTML5',
      'CSS3',
      'SCSS',
      'PrimeNG',
      'OAuth2 / JWT',
      'Chart.js',
      'Highcharts',
      'ECharts',
      'D3.js',
      'Jasmine',
      'Karma',
    ],
    features: [
      'Asset Monitoring',
      'Vulnerability Management',
      'Security Alerts and Investigations',
      'Dynamic Dashboard Modules',
      'Advanced Filtering and Search',
      'Interactive Reports and Analytics',
      'Reusable UI Components',
      'Responsive User Interfaces',
      'Angular Version Migration',
    ],
  },
  {
    title: 'eMag - Digital Publication Reader',
    type: 'Professional Project',
    description:
      'A digital publication reader application that provides users with an interactive reading experience. Developed responsive Angular-based interfaces and reader functionalities, enabling users to explore digital publications through search, bookmarking, zoom, fullscreen viewing, thumbnail previews, and seamless page navigation.',
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'REST APIs',
      'Angular Material',
    ],
    features: [
      'Full-Text Search',
      'Persistent Bookmarking',
      'Multi-Level Zoom',
      'Fullscreen Viewing',
      'Thumbnail Previews',
      'Seamless Page Navigation',
      'User Registration and Authentication',
      'Subscription Management',
      'Responsive Web Interfaces',
    ],
  },
  // 4. Nighthawk

  {
    title: 'Nighthawk - AI-Powered Chatbot Application',
    type: 'AI Project',
    description:
      'An AI-powered chatbot application built using React 19, featuring a modern and interactive user interface. Developed frontend functionality including user login, reusable components, responsive layouts, API integration, and interactive conversational experiences.',

    technologies: [
      'React 19',
      'JavaScript',
      'React Router',
      'Tailwind CSS',
      'Radix UI',
      'Axios',
      'React Hook Form',
      'Zod',
      'Framer Motion',
      'Lucide React',
      'HTML5',
      'CSS3',
    ],

    features: [
      'User Login Interface',
      'AI Chatbot Interface',
      'Interactive Conversational UI',
      'Reusable React Components',
      'Form Handling and Validation',
      'API Integration',
      'Responsive UI Design',
      'Interactive UI Animations',
    ],
  },
  // {
  //   title: 'User Management System',
  //   type: 'Personal Project',
  //   description:
  //     'A personal full-stack learning project focused on building an Angular frontend, Node.js backend and MySQL database integration.',
  //   technologies: [
  //     'Angular',
  //     'TypeScript',
  //     'Node.js',
  //     'MySQL',
  //   ],
  //   features: [
  //     'Login and Authentication',
  //     'Dashboard',
  //     'User CRUD Operations',
  //     'REST API Integration',
  //     'MySQL Database Integration',
  //   ],
  // },
];
