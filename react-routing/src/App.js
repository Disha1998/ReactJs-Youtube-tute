// import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import About from "./About";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from "react-router-dom";
// import {Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home" >Home </Link>
        <br />
        <Link to="/about">About</Link>
       
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/about"  element={<About />} />
        </Routes>
      
      </Router>
    </div>
  );
}





export default App;
