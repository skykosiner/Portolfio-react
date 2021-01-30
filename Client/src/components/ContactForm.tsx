import * as React from "react"
import styled from "styled-components"
import "../App.css"

const FromWrapper = styled.div`
  z-index: 99;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
`

const Form = styled.form`
  font-size: 15px;
`

const Input = styled.input`
  border: none;
  width: 287px;
  height: 38px;
  margin-top: 20px;
  transition: 0.2s ease all;
  border: 1px solid #eaecee;
  &:hover {
    transform: scale(1.1);
  }
`

const Message = styled.textarea`
  border: none;
  width: 287px;
  height: 185px;
  margin-top: 20px;
  transition: 0.2s ease all;
  border: 1px solid #eaecee;
  &:hover {
    transform: scale(1.1);
  }
`

const SubmitCenter = styled.div`
  display: flex;
  justify-content: center;
  height: 17%;
  z-index: 99;
`
const Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  button {
    font-size: 20px;
    cursor: pointer;
    border: none;
    background: var(--color-bt-primary);
    transition: 0.2s ease all;
    padding: 10px 10px;
    color: var(--color-btn-text);
  }
  button:hover {
    background: var(--color-btn-hover);
    color: var(--color-bt-primary-hover);
    text-decoration: underline;
  }
`

const ContactForm = () => {
  return (
    <FromWrapper>
      <Form action="http://localhost:3000/contact" method="POST">
        {/* --------- Name ---------- */}
        <Input type="text" name="name" placeholder="Name: " />
        {/* --------- Email ---------- */}
        <br />
        <Input type="email" name="email" placeholder="Email: " />
        {/* --------- Subject ---------- */}
        <br />
        <Input type="text" name="subject" placeholder="Subject: " />
        {/* --------- Message ---------- */}
        <br />
        <Message type="text" name="message" placeholder="Message: " />
        {/* --------- Submit button center ---------- */}
        <SubmitCenter>
          {/* --------- Submit button ---------- */}
          <Submit>
            <button>Submit</button>
          </Submit>
          <br />
        </SubmitCenter>
      </Form>
    </FromWrapper>
  )
}

export default ContactForm
