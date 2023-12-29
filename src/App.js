import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import ProjectView from "./Pages/ProjectView"
import "./Styles/App.css"

function App()
{
  return (
    <Router>
      <div className="Container">
        <header>
          <nav className="NavBar">
            <a href="#Home">Home</a>
            <a href="#Background">Background</a>
            <a href="#Skills">Skills</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/ProjectView/:ProjectTitle" element = {<ProjectView/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
