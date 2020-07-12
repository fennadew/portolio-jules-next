import Layout from '../components/layout/layout'
import Awards from '../components/awards/awards'
import Link from 'next/link'
import classNames from 'classnames'
import s from './index.module.scss'
import { attributes, html } from '../content/home.md'

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

const Home = ({ postsList }) => {
  const awards = postsList.reduce(({ attributes }) => {})

  return (
    <Layout>
      <ul>
        {postsList.map((post) => (
          <li className={s.projectCard} key={post.slug}>
            <Link href="/project/[slug]" as={`/project/${post.slug}`}>
              <a>
                <h2 className={classNames(`projectTitle`)}>
                  {post.attributes.title}
                </h2>
                <h3 className={classNames(`projectSubtitle`)}>
                  {post.attributes.tag}
                </h3>
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <Awards awards={awards} />

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export async function getStaticProps() {
  const postsList = await importprojectPosts()

  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  }
}

export default Home
