import { useCallback, useState, useRef, useEffect } from 'react'

import { motion, useAnimation } from 'framer-motion'
import classNames from 'classnames'

import ProjectCard from '@/components/projectCard/projectCard'
import ProjectDetails from '@/components/projectDetails/projectDetails'

import { easeOutExpo } from '@/utils/easings'

import s from './project.module.scss'

const TRANSITION = { duration: 0.5, ease: easeOutExpo }

const Project = ({ project }) => {
  const { attributes = {} } = project
  const { rotation = 0, align } = attributes

  const [isOpen, setIsOpen] = useState(false)

  const controls = useAnimation()

  const toggleProject = useCallback(() => {
    const prevIsOpen = isOpen
    setIsOpen(!prevIsOpen)

    if (!prevIsOpen) {
      controls.start({
        rotate: 0,
        transition: { ...TRANSITION, delay: 0 },
      })
    } else {
      controls.start({
        opacity: 1,
        rotate: rotation,
        transition: { ...TRANSITION, delay: 0.3 },
      })
    }
  }, [isOpen, controls, rotation])

  useEffect(() => {
    controls.set({
      opacity: 1,
      rotate: rotation,
    })
  }, [controls, rotation])

  return (
    <motion.li
      initial={{ opacity: 0 }}
      animate={controls}
      className={classNames(s.container, s[align])}
    >
      <ProjectCard isOpen={isOpen} toggleProject={toggleProject} attributes={attributes} />
      <ProjectDetails isOpen={isOpen} attributes={attributes} />
    </motion.li>
  )
}

export default Project
