import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Contact.css';

function Contact() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      ref={elementRef}
      className={`contact-section ${isVisible ? 'visible' : ''}`}
      id='contact'
      aria-labelledby="contact-heading"
    >

      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2 id="contact-heading">Let's Work Together</h2>
        <span>
          I'm open to discussing new opportunities
          and interesting projects.
        </span>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's connect</h3>
          <p>
            Looking for an experienced developer
            for your team? Feel free to reach out.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <a href="mailto:saradhi975@gmail.com">
              saradhi975@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <strong>LinkedIn</strong>
            <a
              href="https://www.linkedin.com/in/saradhimuneendra/"
              target='_blank'
              rel="noopener noreferrer">
              Visit LinkedIn Profile
            </a>
          </div>

          <div className="contact-item">
            <strong>GitHub</strong>
            <a
              href="https://github.com/SaradhiMuneendra"
              target="_blank"
              rel="noopener noreferrer">
              Visit GitHub Profile
            </a>
          </div>

          <a
            href="/Senior-Angular-Developer.pdf"
            download
            className="resume-button"
          >
            Download My Resume
          </a>

        </div>

        <div className="contact-message">
          <ul>
            <li>9.6 years of software development experience.</li>
            <li>Enterprise Angular application expertise.</li>
            <li>Frontend and backend development experience.</li>
            <li>Experience with scalable application architecture.</li>
            <li>Strong focus on maintainable and reusable code.</li>
          </ul>
        </div>

      </div>

    </section>
  )
}

export default Contact