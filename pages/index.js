import classNames from 'classnames'

import Layout from '../components/layout/layout'
import Awards from '../components/awards/awards'
import Projects from '../components/projects/projects'
import About from '../components/about/about'

import { html } from '../content/home.md'

import s from './index.module.scss'

const importprojectPosts = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../content/projectPosts', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../content/projectPosts/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const setTotalAwards = (totalAwards, { attributes: projectAttributes = {} }) => {
  const { awwwards: projectAwards = [] } = projectAttributes

  const addToTotalAwards = (projectAward) => {
    const findMatch = ({ title }) => title === projectAward
    const awardIndex = totalAwards.findIndex(findMatch)

    if (awardIndex === -1) {
      totalAwards.push({ title: projectAward, count: 1 })
    } else {
      totalAwards = totalAwards.map(({ title, count }) => ({
        ...title,
        count: count + 1,
      }))
    }
  }

  projectAwards.forEach(addToTotalAwards)

  return totalAwards
}

const Home = ({ projectsList }) => {
  const awards = projectsList.reduce(setTotalAwards, [])

  return (
    <Layout>
      <Projects projects={projectsList} />
      <Awards awards={awards} />
      <About html={html} />
    </Layout>
  )
}

export async function getStaticProps() {
  const projectsList = await importprojectPosts()

  return {
    props: {
      projectsList,
    }, // will be passed to the page component as props
  }
}

export default Home
