import React from "react"
import { Card, Button } from "react-bootstrap"
import { Portfolio, LifeCoverInTrust, MovieList } from "../data/projectsData"
import "bootstrap/dist/css/bootstrap.min.css"
import styled from "styled-components"
import lifeCoverImg from "../images/lifeCover.png"
import portfolioImg from "../images/portfolio.svg"

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 50px;
  margin-top: 20px;
`

const CardContainer = styled(Card)`
  width: 18rem;
  height: 26rem;
  cursor: pointer;
  transition: 0.2s ease all;
  text-align: center;
  &:hover {
    box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);
  }
`
const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px 10px;
`

export const Projects = () => {
  return (
    <>
      <Title>Projects</Title>
      <div className="d-flex flex-row justify-content-center">
        <Cards>
          <CardContainer>
            <Card.Img src={portfolioImg} />
            <Card.Body className="d-flex flex-column-reverse">
              <Card.Title>{Portfolio.name}</Card.Title>
              <Card.Text className="text-justify">{Portfolio.desc}</Card.Text>
              <Button className="mr-3 mt-auto">See Code</Button>
              <Button className="mt-auto">See Live</Button>
            </Card.Body>
          </CardContainer>
          <CardContainer>
            <Card.Img src={lifeCoverImg} />
            <Card.Body>
              <Card.Title>{LifeCoverInTrust.name}</Card.Title>
              <Card.Text className="text-justify">
                {LifeCoverInTrust.desc}
              </Card.Text>
              <Button className="mr-3">See Code</Button>
              <Button>See Live</Button>
            </Card.Body>
          </CardContainer>
          <CardContainer>
            <Card.Img src={portfolioImg} />
            <Card.Body>
              <Card.Title>{MovieList.name}</Card.Title>
              <Card.Text className="text-justify">{MovieList.desc}</Card.Text>
              <Button className="mr-3">See code</Button>
              <Button>See live</Button>
            </Card.Body>
          </CardContainer>
        </Cards>
      </div>
    </>
  )
}
