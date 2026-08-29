import Reveal from './Reveal'
import WindowChrome from './WindowChrome'
import { projects } from '../data/content'
import { IconGitHub, IconArrowUpRight } from './Icons'

export default function Projects() {
  return (
    <section id="work" className="section projects">
      <span className="section-index">03</span>
      <Reveal as="h2" className="section-heading">
        Selected Work
      </Reveal>

      <div className="bento">
        {projects.map((project, i) => (
          <Reveal
            key={project.name}
            delay={i * 120}
            className={`project-card${project.featured ? ' project-card--featured' : ''}`}
          >
            <WindowChrome title={project.file} />
            <div className="project-card-body">
              <div className="project-card-top">
                <div>
                  <p className="project-tagline">{project.tagline}</p>
                  <h3>{project.name}</h3>
                </div>
                <div className="project-links">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <IconArrowUpRight />
                    </a>
                  )}
                  <a href={project.source} target="_blank" rel="noopener noreferrer" aria-label="Source code">
                    <IconGitHub />
                  </a>
                </div>
              </div>

              <p className="project-desc">{project.desc}</p>

              <ul className="project-points">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
