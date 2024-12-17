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
        <footer>
          <div className='Footer-Content'>
            <p>Copyright © {new Date().getFullYear()} Job Omondiale. All Rights Reserved.</p>
            <div className='Footer-Right'>
              <a href='https://www.instagram.com/not_Jasonx' target='blank'>Instgram</a>
              <a href='https://www.linkedin.com/in/job-omondiale-2a04b4278/' target='blank'>LinkedIn</a>
              <a href='https://github.com/Lazy-Jason' target='blank'>GitHub</a>
              <a href='https://lazy-studio.itch.io' target='blank'>itch.io</a>
              <a href='mailto:huntingj4@gmail.com?' target='blank'>Email</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App;
