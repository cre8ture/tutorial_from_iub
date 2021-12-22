import React from "react";
import ReactDOM from "react-dom";
//component file
import TodoContainer from "./functionBased/components/TodoContainer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";


//stylesheet
import "./functionBased/App.css";
import About from "./pages/About";
import NotMatch from "./pages/NotMatch";
//stylesheet
// import "./App.css"
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<TodoContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotMatch />} />

        </Routes>
      </>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
