import classNames from 'classnames'

import s from './about.module.scss'

const About = ({ html }) => (
  <div className={classNames(s.container, `b2`)} dangerouslySetInnerHTML={{ __html: html }} />
)

export default About
