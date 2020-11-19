import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import "../App.css"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const Title = styled.h1`
    text-align: center;
    font-size: 70px;
    font-family: "Roboto", sans-serif;
  `
  const Post = styled.li`
    box-shadow: 5px 5px 100px rgba(0, 0, 0, 0.3);
    border: none;
    width: 554px;
    margin: 19px;
    background-color: #fdfdfd;
    height: 138px;
    display: flex;
    align-items: center;
    font-family: "Roboto", sans-serif;
    transition: 0.2s ease all;
    /* ------Hover effect------ */
    &:hover {
      background-color: #d5d5d5;
    }
  `
  const List = styled.ol`
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 50px;
    font-family: "Roboto", sans-serif;
  `
  return (
    <Layout>
      <Title>Blog</Title>
      <List>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Link
              key={edge.node.frontmatter.title}
              style={{
                textDecoration: "none",
                color: "#3C3C3C",
                textAlign: "center",
              }}
              to={`/blog/${edge.node.fields.slug}`}
            >
              <Post key={edge.node.frontmatter.title}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p style={{ position: "absolute", marginBottom: "-20px" }}>
                  {edge.node.frontmatter.date}
                </p>
              </Post>
            </Link>
          )
        })}
      </List>
    </Layout>
  )
}

export default Blog
