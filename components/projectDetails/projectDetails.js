import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { motion, useAnimation } from 'framer-motion'

import useResizeObserver from '@/hooks/useResizeObserver'

import s from './projectDetails.module.scss'
import usePrevious from '@/hooks/usePrevious'

const ProjectDetails = ({ attributes, isOpen }) => {
  const { awards = [], role = ``, commisionedBy = ``, link } = attributes
  const prevIsOpen = usePrevious(isOpen)

  const controls = useAnimation()

  const [height, setHeight] = useState(0)

  const setRef = useResizeObserver((entry) => {
    if (!entry.target) return

    const { height } = entry.target.getBoundingClientRect()

    setHeight(height)
  }, [])

  useEffect(() => {
    if (prevIsOpen === isOpen) return

    if (isOpen) {
      controls.start({
        height,
      })
    } else {
      controls.start({
        height: 0,
      })
    }
  }, [height, prevIsOpen, isOpen, controls])

  console.log(height)

  return (
    <motion.article
      initial={{ height: 0 }}
      animate={controls}
      transition={{ delay: isOpen ? 0.3 : 0, duration: 0.5 }}
      className={s.container}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ delay: isOpen ? 0.3 : 0, duration: 0.5 }}
        ref={setRef}
        className={s.inner}
      >
        <aside className={s.info}>
          <h3 className={classNames(s.infoItem, 'b3 italic')}>{`Awards `}</h3>
          <ul className={s.infoItem}>
            {awards.map((award, i) => (
              <li key={award} className={classNames(s.infoItem, 'b2')}>{`${award}${
                i < awards.length - 1 ? `/ ` : ` `
              }`}</li>
            ))}
          </ul>
          <h3 className={classNames(s.infoItem, 'b3 italic')}>{`Role `}</h3>
          <p className={classNames(s.infoItem, 'b2')}>{`${role} `}</p>
          <h3 className={classNames(s.infoItem, 'b3 italic')}>{`Commisioned by `}</h3>
          <p className={classNames(s.infoItem, 'b2')}>{`${commisionedBy} `}</p>

          {link && (
            <a
              className={classNames(s.caseLink, `b3`)}
              href={link}
              target="_blank"
              rel="noreferrer"
            >{`See case`}</a>
          )}
        </aside>
        <p className={classNames(s.body, 'b1')}>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nisi sed nibh
          hendrerit imperdiet. Praesent vitae hendrerit ipsum. id nibh libero. Morbi leo tortor,
          sodales et efficitur nec, vehicula id elit. Ut maximus malesuada nisl, quis dapibus velit
          mattis eu. Vestibulum vel urn`}
        </p>
      </motion.div>
    </motion.article>
  )
}

export default ProjectDetails
