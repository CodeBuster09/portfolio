import Reveal from './Reveal'
import { profile } from '../data/content'
import { IconGitHub, IconLinkedIn, IconLeetCode, IconCodeforces } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <Reveal as="h2" className="contact-heading">
        Let&apos;s build
        <br />
        <em>something great.</em>
      </Reveal>

      <Reveal delay={100}>
        <a className="contact-email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </Reveal>

      <Reveal delay={180} className="social-row">
        <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <IconGitHub /> GitHub
        </a>
        <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <IconLinkedIn /> LinkedIn
        </a>
        <a href={profile.links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
          <IconLeetCode /> LeetCode
        </a>
        <a href={profile.links.codeforces} target="_blank" rel="noopener noreferrer" aria-label="Codeforces">
          <IconCodeforces /> Codeforces
        </a>
      </Reveal>
    </section>
  )
}
