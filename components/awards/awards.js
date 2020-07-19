import PropTypes from 'prop-types'
import classNames from 'classnames'

import s from './awards.module.scss'

const Awards = ({ awards }) => {
  return (
    <section className={s.container}>
      <h1 className={`heading`}>{`Awards & features`}</h1>

      <ul>
        {awards.map(({ title, count }) => (
          <li className={classNames(s.award, `b1`)} key={title}>
            <div>
              {title}
              <sup className={classNames(s.count, `sup`)}>{`(${count})`}</sup>
            </div>
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
