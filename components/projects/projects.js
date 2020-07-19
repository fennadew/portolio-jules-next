import ProjectCard from '../projectCard/projectCard'
import s from './projects.module.scss'

const Projects = ({ projects }) => {
  return (
    <section>
      <h1 className={`screen-readers-only`}>{`Projects`}</h1>
      <ul>
        {projects.map((project = {}, index) => {
          const { slug } = project

          return <ProjectCard key={slug} project={project} index={index} />
        })}
      </ul>
    </section>
  )
}

export default Projects
