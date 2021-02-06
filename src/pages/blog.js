import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = (props) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={props.data?.allStrapiBlogs.nodes} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM Do, YYYY")
        id
        slug
        desc
      }
    }
  }
`

export default Blog
