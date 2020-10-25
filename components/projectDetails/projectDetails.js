import classNames from 'classnames'
import { motion } from 'framer-motion'

import s from './projectDetails.module.scss'

const ProjectDetails = ({ attributes, isOpen }) => {
  const { awards = [], role = ``, commisionedBy = `` } = attributes

  return (
    <motion.article
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: isOpen ? `auto` : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ delay: isOpen ? 0.3 : 0, duration: 0.5 }}
      className={s.container}
    >
      <div className={s.inner}>
        <aside className={s.info}>
          <h3 className={classNames(s.infoTitle, 'b3')}>Awards</h3>
          <ul>
            {awards.map((award) => (
              <li className={classNames(s.listItem, 'b2')}>{award}</li>
            ))}
          </ul>
          <h3 className={classNames(s.infoTitle, 'b3')}>Role</h3>
          <p className={classNames('b2')}>{role}</p>
          <h3 className={classNames(s.infoTitle, 'b3')}>Commisioned by</h3>
          <p className={classNames('b2')}>{commisionedBy}</p>

          <a href="" target="_blank" rel="noopener" />
        </aside>
        <p className={classNames(s.body, 'b1')}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula nisi sed nibh
          hendrerit imperdiet. Praesent vitae hendrerit ipsum. id nibh libero. Morbi leo tortor,
          sodales et efficitur nec, vehicula id elit. Ut maximus malesuada nisl, quis dapibus velit
          mattis eu. Vestibulum vel urn
        </p>
      </div>
    </motion.article>
  )
}

export default ProjectDetails
