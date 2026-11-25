import useScrollAnimation from '../../hooks/useScrollAnimation';
import { skills } from '../../data/skills';

import './Skills.css';

interface SkillCardProps {
  skill: (typeof skills)[number];
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