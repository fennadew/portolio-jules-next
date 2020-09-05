import Project from '../project/project'
import s from './projects.module.scss'

const Projects = ({ projects }) => {
  return (
    <section>
      <h1 className={`screen-readers-only`}>{`Projects`}</h1>
      <ul className={s.list}>
        {projects.map((project = {}) => {
          const { slug } = project

          return <Project key={slug} project={project} />
        })}
      </ul>
    </section>
  )
}

export default Projects
