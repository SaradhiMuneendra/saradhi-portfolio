import { contactHeading, contactInfo, contactItems, resumeLink, contactHighlights } from '../../data/contact';
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

      <div className="section-heading contact-heading">
        <p>{contactHeading.eyebrow}</p>
        <h2 id="contact-heading">{contactHeading.title}</h2>
        <span>{contactHeading.description}</span>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>{contactInfo.title}</h3>
          <p>{contactInfo.description}</p>

          {
            contactItems.map((item, index) => (
              <div className="contact-item" key={item.label} style={{ '--card-index': index } as React.CSSProperties}>
                <strong>{item.label}</strong>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                >
                  {item.value}
                </a>
              </div>
            ))
          }

          <a
            href={resumeLink.href}
            download
            className="resume-button"
          >
            {resumeLink.label}
          </a>

        </div>

        <div className="contact-message">
          <ul>
            {
              contactHighlights.map((highlight, index) => (
                <li key={highlight} style={{ '--card-index': index } as React.CSSProperties}>{highlight}</li>
              ))
            }
          </ul>
        </div>

      </div>

    </section>
  )
}

export default Contact;