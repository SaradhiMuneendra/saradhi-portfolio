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
          <p>
            I'm a Senior Angular and Full Stack Developer
            with 9.6 years of experience building enterprise
            web applications across healthcare, cybersecurity,
            analytics and digital publishing domains.
          </p>

          <p>
            My primary expertise is Angular development,
            including Angular 10–18, TypeScript, RxJS, NgRx,
            reusable components, application architecture,
            and performance optimization.
          </p>

          <p>
            I also have 3 years of professional experience
            developing backend applications using Python
            and FastAPI, including REST APIs, business logic,
            Pydantic validation and JWT authentication.
          </p>

          <p>
            Additionally, I have experience with React,
            Node.js, MySQL and SQL Server. I enjoy solving
            complex technical problems and building scalable,
            maintainable applications.
          </p>
        </div>

        <div className='about-details'>
          <div className="detail-card">
            <h3>9.6+</h3>
            <p>Years Experience</p>
          </div>

          <div className="detail-card">
            <h3>3+</h3>
            <p>Years Python / FastAPI</p>
          </div>

          <div className="detail-card">
            <h3>4</h3>
            <p>Business Domains</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About