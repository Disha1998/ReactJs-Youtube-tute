import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import Header from "./StudentDesk component/Header";
import PostBook from "./StudentDesk component/PostBook";
import Login from "./StudentDesk component/Login";
// import {Button} from 'react-bootstrap'
import BannerBox from "./StudentDesk component/BannerBox";


function App() {
  return (
    <div className="App">
      <Header />
   
    
      <Route path="/Login"><Login /></Route>

      <Route path="/" exact={true}><PostBook /></Route>
      <BannerBox />
    </div>
  );
}

export default App;
