import Layout from '../components/layout'
import Link from 'next/link'
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

const Home = ({postsList}) => (
  <Layout>
    {postsList.map((post) => (
      <div key={post.slug} className="post">
        <Link href="/project/[slug]" as={`/project/${post.slug}`}>
          <a>
            <img src={post.attributes.thumbnail} />
            <h2>{post.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
)


export async function getStaticProps() {
  const postsList = await importprojectPosts()

  return {
    props: {
      postsList,
    }, // will be passed to the page component as props
  }
}

export default Home
