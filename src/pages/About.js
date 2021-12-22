import React from "react"
import { useMatch  } from "react-router-dom"
import { Link, Route } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = () => {
  const { url, path } = useMatch()
  console.log('url: ', url); 
  console.log('path: ', path)
  console.log("hello usematch!", useMatch())
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/about-app`}>About App</Link>
        </li>
        <li>
          <Link to={`${url}/about-author`}>About Author</Link>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  )
}
export default About