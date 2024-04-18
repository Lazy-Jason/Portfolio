import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import ProjectView from "./Pages/ProjectView"
import "./Styles/App.css"

function App()
{
  return (
    <Router>
      <div className="Container">
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/ProjectView/:ProjectTitle" element = {<ProjectView/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
