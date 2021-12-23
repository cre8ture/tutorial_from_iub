import React from "react"
import { useMatch  } from "react-router-dom"
import { Link, Route, Routes } from "react-router-dom"
import SinglePage from "./SinglePage"
import Navbar from '../functionBased/components/Navbar'
//stylesheet
import "../functionBased/App.css";

const About = () => {
  return (
    <div>
         <Navbar />
    <div className="about__content">
  
      <ul className="about__list">
        <li>
          <Link to="about-app">About App</Link>
        </li>
        <li>
          <Link to="about-author">About Author</Link>
        </li>
      </ul>

      <Routes>
      <Route path=":slug" element={<SinglePage />}/>
      </Routes>
    </div>
    </div>
  )
}
export default About