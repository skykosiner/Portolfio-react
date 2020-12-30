import React, { useEffect, useState } from "react"
import uuid from "uuid/dist/v4"
import { Jumbotron, Spinner } from "react-bootstrap"
import api from "../apis/api"

export const ListRepository = () => {
  // State
  const [list, setList] = useState([])
  // Check if it loading the default will be set to true because when the user opens the page it is only just starting to fetch the data
  const [isLoading, setLoading] = useState(true)

  // Function to get the data
  const getRepositories = async () => {
    // Making a get request to the url
    await api.get("/users/yonikosiner/repos").then(response => {
      // Store the response in a variable called data
      const data = response.data.splice(0, 100)
      console.log(data)
      // Setting the variable data to the list array
      setList(data)
      setLoading(false)
    })
  }
  // Using useEffect so when the page loads it starts to run this function
  useEffect(() => {
    getRepositories()
  }, [])
  return (
    <Jumbotron className="mt-3">
      <h2>Check out more of my projects from my github repository's</h2>
      {/* Check if the data is still loading */}
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        //Lopping over all the items in the array
        list.map(items => (
          // For each item in the array return p tag with the name of the repository and a link to that repository
          // They key uuid() is to generate a unique id for each item in the list
          <div key={uuid()}>
            <a className="text-dark " href={items.html_url} target=" _blank">
              <p>{items.full_name}</p>
            </a>
          </div>
        ))
      )}
    </Jumbotron>
  )
}
