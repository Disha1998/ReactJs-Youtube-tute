// import logo from './logo.svg';
import './App.css';
import React,{useState,useRef} from 'react';

function App() {

  // Uncontrolled component
  let inputRef=useRef(null)
  let inputRef2=useRef(null)
  function submitForm(e){
    e.preventDefault()
    console.log("input ref 1",inputRef.current.value)
    console.log("input ref 2",inputRef2.current.value)
     let input3 = document.getElementById("i3").value
     console.log("input ref 3",input3)
    //  


  }
  // const [val,setval]=useState("disha")   //Controlled component
  return (
    <div className="App">
      {/* Controlled Component */}
      {/* <h3>Controlled Component</h3>
      <input type="text" value={val} onChange={(e)=>setval(e.target.value)}/> */}
      {/* */}



      {/* Uncontrolled component */}

      <h1>Uncontrolled Component</h1>
      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" /><br /> <br/>
        <input ref={inputRef2}type="text" /> <br /> <br/>
        <input id="i3" type="text" /> <br /> <br/>

        <button>Submit</button>
      </form>
      {/*   */}
      
      </div>
  );
}

export default App;
