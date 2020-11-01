import { useCallback, useState, useRef } from 'react'

import { motion } from 'framer-motion'
import classNames from 'classnames'

import ProjectCard from '@/components/projectCard/projectCard'
import ProjectDetails from '@/components/projectDetails/projectDetails'

import s from './project.module.scss'

const Project = ({ project }) => {
  const { attributes = {} } = project
  const { rotation = 0, align } = attributes

  const [isOpen, setIsOpen] = useState(false)
  const toggleProject = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9], delay: isOpen ? 0 : 0.5 }
  const mouseEnter = useRef(false)

  const onMouseEnter = () => {
    mouseEnter.current = true
  }

  const onMouseLeave = () => {
    mouseEnter.current = false
  }

  const [width, setWidth] = useState(`auto`)

  const onResize = useCallback(
    (node) => {
      if (isOpen || !node) return

      const { width } = node.getBoundingClientRect()

      setWidth(width)
    },
    [setWidth, isOpen, mouseEnter]
  )

  const variants = {
    open: { rotate: 0, width: `100%` },
    close: { rotate: rotation, width: width },
    closeHover: {},
  }

  console.log(width)

  return (
    <motion.li
      initial={`close`}
      animate={isOpen ? `open` : `close`}
      variants={variants}
      transition={transition}
      style={{ width }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={classNames(s.container, s[align])}
    >
      <ProjectCard
        onResize={onResize}
        isOpen={isOpen}
        toggleProject={toggleProject}
        attributes={attributes}
      />
      <ProjectDetails isOpen={isOpen} attributes={attributes} />
    </motion.li>
  )
}

export default Project
