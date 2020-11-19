import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import styled from "styled-components"
import "../App.css"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
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

const Input = styled.input`
  border: none;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
  width: 287px;
  height: 38px;
  margin-top: 20px;
  transition: 0.2s ease all;
  &:hover {
    transform: scale(0.9);
  }
`

const Message = styled.input`
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
    <Layout>
      <Body>
        <Title>{props.data.markdownRemark.frontmatter.title}</Title>
        <Post
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></Post>
        <FromWrapper>
          <Form
            action="https://getform.io/f/657ab555-9090-4760-bddd-816aa2c36d7a"
            method="POST"
          >
            {/* --------- Name ---------- */}
            <Input type="text" name="name" placeholder="Name: " />
            {/* --------- Email ---------- */}
            <br />
            <Input type="email" name="email" placeholder="Email: " />
            {/* --------- Subject ---------- */}
            <br />
            {/* --------- Feedback ---------- */}
            <Message type="text" name="message" placeholder="Feedback: " />
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
