
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-layout">

        {/* Left side - Introduction */}
        <div className="hero-content">
          <p className="hero-label">
            HELLO, I'M A SOFTWARE ENGINEER
          </p>

          <h1>
            Hi, I'm Saradhi Muneendra Gundabattina
          </h1>

          <h2>
            Senior Angular & Full Stack Developer
          </h2>

          <p className="hero-description">
            Angular Specialist | TypeScript | RxJS | NgRx | Python | FastAPI.
            <br />
            I have 9.6 years of experience building scalable enterprise
            applications, with expertise in frontend development and
            backend engineering.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="hero-experience">
            <strong>9.6+</strong>
            <span>Years of Experience</span>
          </div>
        </div>

        {/* Right side - Profile Photo */}
        <div className="hero-image-container">
          <div className="hero-image-frame">
            <img
              src="/profile-photo.png"
              alt="Saradhi Muneendra Gundabattina, Senior Angular and Full Stack Developer"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
