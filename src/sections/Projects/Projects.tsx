import { projects } from '../../data/projects';

import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Projects.css';

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className='project-card' style={{ '--card-index': index } as React.CSSProperties}>

      <div className="project-card-header">
        <span className='project-type'>
          {project.type}
        </span>
        <span className="project-symbol">↗</span>
      </div>

      <h3>{project.title}</h3>

      <p className='project-description'>
        {project.description}
      </p>

      <h4>Key Features</h4>

      <ul>
        {
          project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))
        }
      </ul>

      <div className="project-technologies">
        {
          project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))
        }
      </div>

    </article>
  )
}

function Projects() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`projects-section ${isVisible ? 'visible' : ''}`}
      id='projects'
      aria-labelledby="projects-heading"
    >

      <div className="section-heading project-heading">
        <p>MY WORK</p>
        <h2 id="projects-heading">Featured Projects</h2>
        <span>
          A selection of professional and personal projects.
        </span>
      </div>

      <div className="projects-grid">
        {
          projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))
        }
      </div>
    </section>
  )
}

export default Projects