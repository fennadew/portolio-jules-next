import classNames from 'classnames'

import Link from 'next/link'

import s from './projects.module.scss'

const Projects = ({ projects }) => {
  return (
    <section>
      <h1 className={`screen-readers-only`}>{`Projects`}</h1>
      <ul>
        {projects.map((project) => (
          <li className={s.projectCard} key={project.slug}>
            <Link href="/project/[slug]" as={`/project/${project.slug}`}>
              <a>
                <h2 className={classNames(`project-title`)}>{project.attributes.title}</h2>
                <span className={classNames(`project-tag`)}>{project.attributes.tag}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects
