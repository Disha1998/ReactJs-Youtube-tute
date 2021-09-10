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

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Switch>
          <Route path="/Login" exact>
            <Login />
          </Route>

          <Route path="/" exact>
            <BannerBox />
          </Route>

          <Route path="/Books" exact>
            <Books />
          </Route>
          {/* <Route path="/Textbook" exact>
            <Textbook />
          </Route> */}
        </Switch>
      </div>
      <InfoBox />
      <Arrivels />
      <Workbox />
      <News />
    </div>
  );
}

export default App;
