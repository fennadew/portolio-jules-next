import { motion } from 'framer-motion'
import classNames from 'classnames'

import { easeOutExpo } from '@/utils/easings'

import s from './projectCard.module.scss'

const ProjectCard = ({ attributes, toggleProject, isOpen }) => {
  const { title = ``, tag = `` } = attributes

  return (
    <button onClick={toggleProject} className={s.link}>
      <div>
        <h2 className={classNames(`h2`, s.title, isOpen && s.isActive)}>{title}</h2>
        <span className={classNames(s.tag, `tag`)}>{tag}</span>
      </div>
    </button>
  )
}

export default ProjectCard
