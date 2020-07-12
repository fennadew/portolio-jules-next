import Layout from '../components/layout'
import { attributes, html } from '../content/home.md'

const Home = () => (
  <Layout>
    <div dangerouslySetInnerHTML={{ __html: html }} />
    <style jsx>{`
      h1,
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
)

export default Home
