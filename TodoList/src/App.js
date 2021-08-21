// import logo from './logo.svg';
import "./App.css";
// import Header from "Header.js";
import Header from "./Components/Header";
import { Todos } from "./Components/Todos";
import { Todoitem } from "./Components/Todoitem";
import { Addtodo } from "./Components/Addtodo";

import { Footer } from "./Components/Footer";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am on delete of ", todo);

    settodos(
      todos.filter((e) => {
        return e !== todo;
      }));
  };
  const addTodo=(title, desc)=>{
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length===0){
      sno = 1;
    }
    else{
   sno = todos[todos.length-1].sno + 1;
   console.log(sno);

    }
    const myTodo={
      sno:sno,
      title:title,
      desc : desc,
    }
    settodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, settodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You go to the market to get this job done1",
    },

    {
      sno: 2,
      title: "Go to the mall",
      desc: "You go to the market to get this job done2",
    },
    {
      sno: 3,
      title: "Go to the city",
      desc: "You go to the market to get this job done3",
    },
  ]);

  return (
    <>
      <Header title="My Todos List" searchbar={true} />
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Todoitem />

      <Footer />
    </>
  );
}

export default App;
