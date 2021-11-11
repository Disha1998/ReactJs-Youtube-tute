// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'

function App() {

const [name,setName]=useState("");
const [tnc,setTnc]=useState(false);
const [interest,setIntrest]=useState("")



  function getFormData(e){
    console.log(name,tnc,interest)
    e.preventDefault()

  }
  return (
    <div className="App">
      <form onSubmit={getFormData}>
        <h1>React js Form </h1> <br /> <br />
        <input type="text" placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/><br /> <br />
        <select onChange={(e)=>setIntrest(e.target.value)}>
          <option>Select Options</option>
          <option>Marvel</option>
          <option>CD</option>
        </select><br /> <br />
        <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and Conditions</span><br /> <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
