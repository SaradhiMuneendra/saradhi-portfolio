import { experiences } from '../../data/experience';
import useScrollAnimation from '../../hooks/useScrollAnimation';

import './Experience.css';

function Experience() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`experience-section ${isVisible ? 'visible' : ''}`}
      id='experience'
      aria-labelledby="experience-heading"
    >

      <div className="section-heading">
        <p>MY CAREER JOURNEY</p>
        <h2 id="experience-heading">Professional Experience</h2>
        <span>My professional journey and technical contributions.</span>
      </div>

      <div className="experience-timeline">
        {
          experiences.map((item, index) => (
            <div className="experience-item" key={item.company}>

              <div className="timeline-marker">
                {index + 1}
              </div>

              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{item.company}</h3>
                    <h4>{item.role}</h4>
                  </div>
                  <span className='experience-duration'>{item.duration}</span>
                </div>

                <p className='experience-project'>
                  Project: {item.project}
                </p>

                <div className="experience-tech">
                  {
                    item.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))
                  }
                </div>

                <h5>Key Responsibilities</h5>

                <ul>
                  {
                    item.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </div>

    </section>
  )
}

export default Experience