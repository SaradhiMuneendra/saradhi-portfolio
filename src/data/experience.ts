
export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  project: string;
  technologies: string[];
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Culinda India Pvt. Ltd.',
    role: 'Senior Full Stack Developer',
    duration: 'April 2023 - May 2026',
    project: 'DarkEye - Vendor Risk Management Platform',
    technologies: [
      'Angular 18', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx',
      'HTML5', 'CSS3', 'SCSS', 'Angular Material', 'REST APIs',
      'WebSockets', 'OAuth2 / JWT', 'Chart.js', 'Highcharts',
      'D3.js', 'Jasmine', 'Karma', 'Git', 'Python', 'FastAPI',
      'Pydantic', 'MySQL', 'SQL Server',
    ],
    responsibilities: [
      'Designed and developed enterprise application modules using Angular 18, TypeScript, RxJS and NgRx.',
      'Led Angular migration from version 14 to 18, improving application performance and reducing bundle size by 20%.',
      'Developed reusable components, custom directives, pipes and shared services across enterprise modules.',
      'Improved application loading performance by 35% using lazy loading, bundle optimization and OnPush change detection.',
      'Implemented complex Reactive Forms with custom synchronous and asynchronous validators.',
      'Integrated REST APIs and implemented application security using OAuth2, JWT, RBAC, Route Guards and HTTP Interceptors.',
      'Managed centralized application state using NgRx Store, Actions, Reducers, Effects and Selectors.',
      'Developed interactive dashboards and data visualizations using Chart.js, Highcharts, ECharts and D3.js.',
      'Implemented real-time notifications using WebSockets.',
      'Participated in code reviews, unit testing, mentoring, Agile ceremonies and production deployments.',
      'Developed backend REST APIs and business logic using Python and FastAPI.',
      'Implemented request validation using Pydantic and authentication using JWT.',
      'Worked with MySQL and SQL Server for database operations and data management.',
    ],
  },
  {
    company: 'Suchir Softech Pvt. Ltd.',
    role: 'Angular Developer',
    duration: 'May 2021 - March 2023',
    project: 'Pulse - Network Security Dashboard',
    technologies: [
      'Angular 10–14', 'TypeScript', 'JavaScript', 'RxJS',
      'HTML5', 'CSS3', 'SCSS', 'Angular Material', 'REST APIs',
      'Angular HttpClient', 'Jasmine', 'Karma', 'Git', 'Jira', 'Postman',
    ],
    responsibilities: [
      'Developed enterprise dashboard modules for Assets, Vulnerabilities, Alerts, Investigations, Reports and Analytics.',
      'Performed multi-phase Angular migrations from version 10 to 12 and 14.',
      'Developed reusable UI components, customized widgets and dynamic dashboard modules.',
      'Implemented advanced filtering, multi-criteria search and reusable data-table components.',
      'Integrated REST APIs using Angular HttpClient with appropriate error handling.',
      'Implemented authentication and authorization using Route Guards and HTTP Interceptors.',
      'Developed responsive user interfaces using Angular, TypeScript, HTML5, CSS3 and SCSS.',
      'Implemented unit testing using Jasmine and Karma to improve code quality.',
      'Collaborated with QA and backend teams in Agile Scrum and provided production support.',
    ],
  },
  {
    company: 'Hoap Health',
    role: 'Software Developer',
    duration: 'November 2016 - May 2021',
    project: 'eMag - Digital Publication Reader',
    technologies: [
      'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
      'SCSS', 'REST APIs', 'Angular Services', 'Git', 'Jira',
    ],
    responsibilities: [
      'Designed and developed responsive web interfaces using Angular, TypeScript, HTML5, CSS3 and SCSS.',
      'Developed digital reader features including full-text search, persistent bookmarking and multi-level zoom.',
      'Implemented fullscreen viewing, thumbnail previews and smooth page navigation.',
      'Developed user management, authentication, dynamic registration and subscription workflow modules.',
      'Integrated REST APIs for publication management and data synchronization.',
      'Implemented responsive layouts for desktop, tablet and mobile platforms.',
      'Performed debugging, bug fixing, cross-browser compatibility improvements and performance optimization.',
      'Collaborated with team members during development, testing and release maintenance cycles.',
    ],
  },
];
