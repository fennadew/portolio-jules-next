import Link from 'next/link'
import s from './layout.module.scss'

const Layout = ({ children }) => (
  <>
    <nav>
      <Link href="/">
        <a
          className={`${s.logoLink} logo`}
        >{`JULIAN MOLLEMA "CREATIVE" ARCHIVE 1991-2020`}</a>
      </Link>
    </nav>
    <main className={s.container}>{children}</main>
  </>
)

export default Layout
