import { useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import classNames from 'classnames'

import { easeOutExpo } from '@/utils/easings'

import s from './projectCard.module.scss'

const ProjectCard = ({ attributes, toggleProject, isOpen }) => {
  const { title = ``, tag = `` } = attributes
  const transition = { duration: 0.5, ease: easeOutExpo }

  const variants = {
    closed: {
      fontVariationSettings: `'wght' 800, 'slnt' 0`,
      fontSize: `10rem`,
      transition: {
        ...transition,
        delay: 0.3,
      },
    },
    open: {
      fontVariationSettings: `'wght' 800, 'slnt' -10`,
      fontSize: `32.2222222222rem`,
      transition: {
        ...transition,
      },
    },
  }

  return (
    <button onClick={toggleProject} className={s.link}>
      <div>
        <motion.h2
          variants={variants}
          initial={'closed'}
          animate={isOpen ? 'open' : 'closed'}
          className={classNames(`h2`, s.title)}
        >
          {title}
        </motion.h2>

        <span className={classNames(s.tag, `tag`)}>{tag}</span>
      </div>
    </button>
  )
}

export default ProjectCard
