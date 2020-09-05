import { useRef, useEffect } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import s from './layout.module.scss'

const Layout = ({ children }) => {
  const year = useRef(new Date().getFullYear())

  const scrollContainer = useRef()
  const scroll = useRef()

  useEffect(() => {
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll.current = new locomotiveModule.default({
        el: scrollContainer.current,
        smooth: true,
      })
    })

    return () => scroll.current && scroll.current.destroy()
  }, [])

  return (
    <div ref={scrollContainer} data-scroll-container className={s.container}>
      <nav className={s.menu}>
        <Link href="/">
          <a
            className={classNames(s.logoLink, `logo`)}
          >{`JULIAN MOLLEMA "CREATIVE" ARCHIVE 1991-${year.current}`}</a>
        </Link>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout
