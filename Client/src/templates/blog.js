import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"
import "../App.css"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  font-family: "Roboto", sans-serif;
  margin: 10px;
`
const Title = styled.h1``
const Post = styled.div`
  font-size: 23px;
`
const FromWrapper = styled.div`
  z-index: 99;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`

const Form = styled.form`
  font-size: 15px;
`

const Message = styled.textarea`
  border: none;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
  width: 287px;
  height: 185px;
  margin-top: 20px;
  transition: 0.2s ease all;
  &:hover {
    transform: scale(1.1);
  }
`

const SubmitCenter = styled.div`
  display: flex;
  justify-content: center;
  z-index: 99;
`
const Submit = styled.button`
  margin: 20px;
  border: none;
  text-align: center;
  color: #000;
  border: 5px solid #5b6267;
  transition: 0.2s ease all;
  box-shadow: 20px 10px 100px rgba(0, 0, 0, 0.1);
  &:hover {
    color: #fff;
    background-color: #5b6267;
    transform: scale(1.2);
  }
  @media (max-width: 769px) {
    background-color: #5b6267;
    color: #fff;
  }
`

const Blog = props => {
  return (
    <Layout id="all">
      <Body>
        <Title>{props.data.contentfulBlogPost.title}</Title>
        <Post
          dangerouslySetInnerHTML={{
            __html: props.data.contentfulBlogPost.body.raw,
          }}
        ></Post>
        <Post>{props.data.contentfulBlogPost.publishedDate}</Post>
        <FromWrapper>
          <Form action="http://localhost:3000/feedback" method="POST">
            {/* --------- Feedback ---------- */}
            <Message type="text" name="feedback" placeholder="Feedback: " />
            {/* --------- Submit button center ---------- */}
            <SubmitCenter>
              {/* --------- Submit button ---------- */}
              <br />
              <Submit type="submit">Send</Submit>
            </SubmitCenter>
          </Form>
        </FromWrapper>
      </Body>
    </Layout>
  )
}

export default Blog
