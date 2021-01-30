import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostCard from "../components/PostCard"

const Blog = ({ data }) => {
  const { posts } = data.allGhostPost
  return (
    <Layout>
      <div>
        {posts.map(({ node }) => (
          // The tag below includes the markup for each post - components/common/PostCard.js
          <PostCard key={node.id} post={node} />
        ))}
      </div>
    </Layout>
  )
}
export default Blog

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
