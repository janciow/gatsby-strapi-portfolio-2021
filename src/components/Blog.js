import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({ id, title, slug, image, date, category, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <article>
        <Image fluid={image.childImageSharp.fluid} className="blog-img" />
      </article>
    </Link>
  )
}

Blog.propTypes = {}

export default Blog
