import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Blog = ({ data }) => {
  const post = data.ghostPost
  return (
    <Layout>
      <article className="post">
        {post.feature_image ? (
          <img src={post.feature_image} alt={post.title} />
        ) : null}
        <h1>{post.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}
export default Blog
export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      title
      slug
      feature_image
      html
    }
  }
`
