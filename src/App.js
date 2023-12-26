import Home from "./Pages/Home";
import "./Styles/App.css"

function App()
{
  return (
    <div className="Container">
      <header>
        <h2>Logo</h2>
        <nav className="NavBar">
          <a href="/">Home</a>
          <a href="#">Background</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </header>
        <Home/>
    </div>
  )
}

export default App;
