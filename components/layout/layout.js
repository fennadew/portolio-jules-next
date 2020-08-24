import { useRef } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import { RafScroll } from '../../utils/utils'

import s from './layout.module.scss'

const Layout = ({ children }) => {
  const rafScroll = new RafScroll()

  const setupRafScroll = (ref) => {
    rafScroll && rafScroll.setup(ref)
  }

  const onWheel = (event) => {
    rafScroll && rafScroll.onWheel(event)
  }

  const year = useRef(new Date().getFullYear())

  return (
    <div className={s.container}>
      <div ref={setupRafScroll} className={s.scrollEl} onWheel={onWheel}>
        <nav className={s.menu}>
          <Link href="/">
            <a
              className={classNames(s.logoLink, `logo`)}
            >{`JULIAN MOLLEMA "CREATIVE" ARCHIVE 1991-${year.current}`}</a>
          </Link>
        </nav>
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
