import PropTypes from 'prop-types'
import classNames from 'classnames'

import s from './awards.module.scss'

const Awards = ({ awards }) => {
  console.log(awards)
  return (
    <section className={s.container}>
      <h1 className={classNames(s.heading, `h3`)}>{`Awards & features`}</h1>

      <ul>
        {awards.map(({ title, count }) => (
          <li key={title} className={classNames(s.award, `b1`)} key={title}>
            {title}
            <sup className={classNames(s.count, `sup`)}>{`(${count})`}</sup>
          </li>
        ))}
      </ul>
    </section>
  )
}

Awards.propTypes = {
  awards: PropTypes.array,
}

Awards.defaultProps = {
  awards: [],
}

export default Awards
