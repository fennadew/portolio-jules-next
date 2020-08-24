import { useRef, useEffect } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import s from './layout.module.scss'

const Layout = ({ children }) => {
  const scrollRef = useRef()

  useEffect(() => {
    import('locomotive-scroll').then((locomotiveModule) => {
      const scroll = new locomotiveModule.default({
        el: scrollRef.current,
        smooth: true,
        smoothMobile: false,
      })
    })
  }, [])

  const year = useRef(new Date().getFullYear())

  return (
    <div ref={scrollRef} className={s.container}>
      <div className={s.scrollEl}>
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
