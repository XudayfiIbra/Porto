import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import HomePage from "./components/homePage";
import AboutPage from "./components/aboutPage";
import ProjectPage from "./components/projects";
import Contact from "./components/contact";

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
            <li className="text-slate-200"><Link to="#">Home</Link></li>
            <li className="text-slate-200"><Link to="#about">About</Link></li>
            <li className="text-slate-200"><Link to="#project">Projects</Link></li>
            <li className="text-slate-200"><Link to="#contact">Contact</Link></li>
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
