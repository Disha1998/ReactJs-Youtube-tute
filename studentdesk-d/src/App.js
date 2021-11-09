import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./StudentDesk component/Header";
import Books from "./StudentDesk component/Books";
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
