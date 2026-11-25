
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
      'An enterprise Vendor Risk Management platform designed to assess vendor security posture, monitor cyber threats, track vulnerabilities and provide actionable risk insights through interactive dashboards and reporting.',
    technologies: [
      'Angular 18',
      'TypeScript',
      'RxJS',
      'NgRx',
      'Python',
      'FastAPI',
      'MySQL',
      'SQL Server',
      'WebSockets',
      'OAuth2 / JWT',
    ],
    features: [
      'Vendor Risk Management',
      'Cyber Threat Intelligence',
      'Dark Web Monitoring',
      'SBOM and Code Security',
      'Risk Dashboards and Reporting',
      'Role-Based Access Control',
    ],
  },
  {
    title: 'Pulse - Network Security Dashboard',
    type: 'Professional Project',
    description:
      'An enterprise network security dashboard designed to monitor assets, vulnerabilities, security alerts, investigations, reports and analytics through interactive dashboards and data visualization.',
    technologies: [
      'Angular 10–14',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'Angular Material',
      'REST APIs',
      'SCSS',
    ],
    features: [
      'Asset Monitoring',
      'Vulnerability Management',
      'Security Alerts and Investigations',
      'Advanced Filtering and Search',
      'Interactive Reports and Analytics',
    ],
  },
  {
    title: 'eMag - Digital Publication Reader',
    type: 'Professional Project',
    description:
      'A digital publication reader application that enables users to access and interact with digital publications through search, bookmarking, zoom, fullscreen viewing, thumbnail previews and seamless page navigation.',
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'SCSS',
      'REST APIs',
    ],
    features: [
      'Full-Text Search',
      'Persistent Bookmarking',
      'Multi-Level Zoom',
      'Fullscreen Viewing',
      'Thumbnail Previews',
      'User Registration and Subscription Workflows',
    ],
  },
  {
    title: 'User Management System',
    type: 'Personal Project',
    description:
      'A personal full-stack learning project focused on building an Angular frontend, Node.js backend and MySQL database integration.',
    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'MySQL',
    ],
    features: [
      'Login and Authentication',
      'Dashboard',
      'User CRUD Operations',
      'REST API Integration',
      'MySQL Database Integration',
    ],
  },
];
