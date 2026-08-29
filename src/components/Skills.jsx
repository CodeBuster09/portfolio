import Reveal from './Reveal'
import { skillGroups, education, achievements } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <span className="section-index">04</span>
      <Reveal as="h2" className="section-heading">
        Skills &amp; Education
      </Reveal>

      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 80} className="skill-group">
            <h3>{group.label}</h3>
            <div className="tag-row">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="edu-row">
        <Reveal className="edu-card">
          <h3>Education</h3>
          <p className="edu-title">{education.degree}</p>
          <p className="edu-sub">{education.school}</p>
          <p className="edu-sub">
            {education.date} · {education.detail}
          </p>
        </Reveal>

        <Reveal delay={100} className="edu-card">
          <h3>Achievements</h3>
          <ul className="project-points">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
