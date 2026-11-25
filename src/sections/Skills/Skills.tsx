import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Skills.css';

interface Skill {
  name: string,
  category: string,
  description: string
}

const skills: Skill[] = [
  // Frontend
  {
    name: 'Angular 10–18',
    category: 'Frontend',
    description: 'Enterprise application development'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    description: 'Strongly typed application development'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    description: 'Modern ES6+ development'
  },
  {
    name: 'React.js',
    category: 'Frontend',
    description: 'Component-based UI development'
  },
  {
    name: 'HTML5 / CSS3',
    category: 'Frontend',
    description: 'Responsive web development'
  },
  {
    name: 'SCSS',
    category: 'Frontend',
    description: 'Maintainable styling and layouts'
  },
  {
    name: 'Angular Material',
    category: 'UI Frameworks',
    description: 'Reusable UI components'
  },
  {
    name: 'PrimeNG',
    category: 'UI Frameworks',
    description: 'Enterprise UI components'
  },

  // State Management
  {
    name: 'RxJS',
    category: 'State Management',
    description: 'Reactive programming and asynchronous streams'
  },
  {
    name: 'NgRx',
    category: 'State Management',
    description: 'Predictable enterprise state management'
  },

  // Backend
  {
    name: 'Python',
    category: 'Backend',
    description: 'Backend application development'
  },
  {
    name: 'FastAPI',
    category: 'Backend',
    description: 'REST API and backend development'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    description: 'Server-side JavaScript development'
  },
  {
    name: 'Pydantic',
    category: 'Backend',
    description: 'Request validation and data models'
  },

  // Database
  {
    name: 'MySQL',
    category: 'Database',
    description: 'Relational database management'
  },
  {
    name: 'SQL Server',
    category: 'Database',
    description: 'Relational database management'
  },

  // APIs and Security
  {
    name: 'REST APIs',
    category: 'API Integration',
    description: 'Frontend and backend integration'
  },
  {
    name: 'GraphQL / Apollo',
    category: 'API Integration',
    description: 'GraphQL API integration'
  },
  {
    name: 'WebSockets',
    category: 'API Integration',
    description: 'Real-time application communication'
  },
  {
    name: 'OAuth2 / JWT',
    category: 'Security',
    description: 'Authentication and authorization'
  }
];

interface SkillCardProps {
  skill: Skill
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="skill-card">
      <h3>{skill.name}</h3>
      <span>{skill.category}</span>
      <p>{skill.description}</p>
    </div>
  );
}

function Skills() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`skills-section ${isVisible ? 'visible' : ''}`}
      id='skills'
      aria-labelledby="skills-heading"
    >

      <div className="section-heading">
        <p>MY TECHNICAL EXPERTISE</p>
        <h2 id="skills-heading">Technical Skills</h2>
      </div>

      <div className="skills-grid">
        {
          skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))
        }
      </div>
    </section>
  )
}

export default Skills