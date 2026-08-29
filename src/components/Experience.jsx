import Reveal from './Reveal'
import WindowChrome from './WindowChrome'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <span className="section-index">02</span>
      <Reveal as="h2" className="section-heading">
        Experience
      </Reveal>

      <div className="exp-list">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 100} className="exp-row">
            <div className="exp-row-num">0{i + 1}</div>
            <div className="window">
              <WindowChrome title={job.file} />
              <div className="window-body exp-row-body">
                <div className="exp-row-head">
                  <h3>{job.company}</h3>
                  <span className="exp-date">{job.date}</span>
                </div>
                <p className="exp-role">
                  {job.role} · {job.location}
                </p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
