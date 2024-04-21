import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import HomePage from "./components/homePage";
import AboutPage from "./components/aboutPage";
import ProjectPage from "./components/projects";
import Contact from "./components/contact";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function App() {
  return (
    <>
      <Router>
        <div className="flex justify-between items-center backdrop-blur-xl fixed top-0 right-0 left-0 h-[70px] p-6">
          <Link to="#">
            <h1 className="text-2xl font-bold cursor-pointer text-slate-200">
              Navbar
            </h1>
          </Link>
          <ul className="flex space-x-4 cursor-pointer">
            <li className="text-slate-200 mt-[.6px]">
              <Link to="#">Home</Link>
            </li>
            <li className="text-slate-200 mt-[.6px]">
              <Link to="#about">About</Link>
            </li>
            <li className="text-slate-200 mt-[.6px]">
              <Link to="#project">Projects</Link>
            </li>
            <li className="text-slate-200 mt-[.6px]">
              <Link to="#contact">Contact</Link>
            </li>
            <li className="text-slate-200">
              <Link to="https://github.com/xudayfiIbra">
                <div className="mr-2 ml-2 mt-[-2.4px]">
                  <FaGithub size={30}/>
                </div>
              </Link>
            </li>
            <li className="text-slate-200">
              <Link to="https://www.linkedin.com/in/xudayfiIbra/">
                <div className="mr-2 mt-[-2.4px]">
                <FaLinkedin size={30} color="blue"/>
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <HomePage />
        </div>
        <div>
          <AboutPage />
        </div>
        <div>
          <ProjectPage />
        </div>
        <div>
          <Contact />
        </div>
      </Router>
    </>
  );
}

export default App;
