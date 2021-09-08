import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import PostBook from "./PostBook";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Header />

    
      <Route path="/Login"><Login /></Route>
      <Route path="/" exact={true}><PostBook /></Route>
    </div>
  );
}

export default App;
