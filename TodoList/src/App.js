// import logo from './logo.svg';
import "./App.css";
// import Header from "Header.js";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Todoitem } from "./Components/Todoitem";
import { Footer } from "./Components/Footer";
import React, { useState } from "react";

function App() {
 


const [todos, settodos] = useState([
  {
    Sno: 1,
    title: "Go to the market",
    desc: "You go to the market to get this job done1",
  },

  {
    Sno: 2,
    title: "Go to the mall",
    desc: "You go to the market to get this job done2",
  },
]);



return (
  <>
    <Header title="My Todos List" searchbar={true} />
    <Todos todos={todos} />
    <Todoitem />
    <Footer />
  </>
);

}
export default App;
