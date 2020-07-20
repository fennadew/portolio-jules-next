import classNames from 'classnames'
import seedRandom from 'seed-random'

import Link from 'next/link'

import s from './projectCard.module.scss'

const projectCard = ({ project, index }) => {
  const {
    slug = ``,
    attributes: { title = ``, tag = `` },
  } = project

  const generateRandomSeed = seedRandom(5, { entropy: true })
  const randomSeed = generateRandomSeed()

  const pickRandomDeg = (number) => {
    const max = 10

    return number * max
  }

  const rotation = pickRandomDeg(randomSeed)

  return (
    <li style={{ transform: `rotate(${rotation}deg)` }} className={s.container}>
      <Link href="/project/[slug]" as={`/project/${slug}`}>
        <a className={classNames(s.link, `h2`)}>
          <h2 className={s.title}>{title}</h2>
          <span className={classNames(s.tag, `tag`)}>{tag}</span>
        </a>
      </Link>
    </li>
  )
}

export default projectCard
