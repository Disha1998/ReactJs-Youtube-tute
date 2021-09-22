import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./StudentDesk component/Header";
import Login from "./StudentDesk component/Login";
import BannerBox from "./StudentDesk component/BannerBox";
import Books from "./StudentDesk component/Books";
import InfoBox from "./StudentDesk component/InfoBox";
import Arrivels from "./StudentDesk component/Slider";
import Workbox from "./StudentDesk component/Workbox";
import News from "./StudentDesk component/News";
import Home from "./StudentDesk component/Home";
import Footer from "./StudentDesk component/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        {/* <Route path="/Login" exact>
          <Login />
        </Route> */}

        <Switch>

        <Route path="/" exact>
          <Home />
        </Route>
          <Route path="/Books" exact>
            <Books />
          </Route>
          {/* <Route path="/Textbook" exact>
            <Textbook />
          </Route> */}
        </Switch>
      </div>
     {/* <Home /> */}

      <Footer />
    </div>
  );
}

export default App;
