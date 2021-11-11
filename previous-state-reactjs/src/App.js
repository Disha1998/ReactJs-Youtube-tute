// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(1)
  function updateCounter(){
    let random = Math.floor(Math.random()*90)
    setCount(random)
  }
  return (
    <div className="App">
    <h1>PREVIOUS STATE IN FUNCTIONAL COMPONENT</h1>
    <h1>{count}</h1>
    <button onClick={updateCounter}>Update</button>
    </div>
  );
}

export default App;
