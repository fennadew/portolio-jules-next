import { useRef } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import s from './layout.module.scss'

const Layout = ({ children }) => {
  const year = useRef(new Date().getFullYear())

  return (
    <>
      <nav>
        <Link href="/">
          <a
            className={classNames(s.logoLink, `logo`)}
          >{`JULIAN MOLLEMA "CREATIVE" ARCHIVE 1991-${year.current}`}</a>
        </Link>
      </nav>
      <main className={s.container}>{children}</main>
    </>
  )
}

export default Layout
