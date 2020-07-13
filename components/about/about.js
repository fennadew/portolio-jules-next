import s from './about.module.scss'

const About = ({ html }) => (
  <div className={s.container} dangerouslySetInnerHTML={{ __html: html }} />
)

export default About
