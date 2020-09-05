import { useEffect, useRef, useCallback } from 'react'
import classNames from 'classnames'

import s from './projectCard.module.scss'

const projectCard = ({ attributes, toggleProject, onResize, isOpen }) => {
  const { title = ``, tag = `` } = attributes

  const containerRef = useRef()

  const setRef = useCallback(
    (node) => {
      if (!node) return

      containerRef.current = node

      onWindowResize()
    },
    [containerRef.current]
  )

  const onWindowResize = useCallback(() => {
    onResize(containerRef.current)
  }, [containerRef.current])

  useEffect(() => {
    window.addEventListener(`resize`, onWindowResize)

    return () => window.removeEventListener(`resize`, onWindowResize)
  }, [containerRef, onWindowResize])

  return (
    <button ref={setRef} onClick={toggleProject} className={classNames(s.link, `h2`)}>
      <div>
        <h2 className={classNames(s.title, isOpen && s.isOpen)}>{title}</h2>
        <span className={classNames(s.tag, `tag`)}>{tag}</span>
      </div>
    </button>
  )
}

export default projectCard
