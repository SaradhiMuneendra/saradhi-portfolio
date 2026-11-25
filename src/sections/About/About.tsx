import { aboutParagraphs, aboutStats } from '../../data/about';
import useScrollAnimation from '../../hooks/useScrollAnimation';

import './About.css';

function About() {

  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`about-section ${isVisible ? 'visible' : ''}`}
      id='about'
      aria-labelledby="about-heading"
    >

      <div className='section-heading'>
        <p>GET TO KNOW ME</p>
        <h2 id="about-heading">About Me</h2>
      </div>

      <div className='about-content'>

        <div className='about-text'>
          {
            aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          }
        </div>

        <div className='about-details'>
          {
            aboutStats.map((stat) => (
              <div className="detail-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default About