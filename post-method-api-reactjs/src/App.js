// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
// import { result } from 'lodash';

function App() {
  const [uId,setuId]=useState("")
  const [title,settitle]=useState("")
  const [body,setbody]=useState("")
  
  function saveData(){
    console.log({uId,title,body})
    let data={uId,title,body}
    fetch("https://jsonplaceholder.typicode.com/posts",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      // console.log('REsult',result)
      result.json().then((resp)=>{
        console.log('response',resp)
      })
    })
  }


  return (
    <div className="App">
     <h1>POST method API</h1>
     <input type="text" name="User id" value={uId} onChange={(e)=>setuId(e.target.value)}/><br /><br />
     <input type="text" name="title"  value={title}  onChange={(e)=>settitle(e.target.value)}/><br /><br />
     <input type="text" name="body"  value={body} onChange={(e)=>setbody(e.target.value)}/><br /><br />
    <button type="button" onClick={saveData}>Save New Data</button>
    </div>
  );
}

export default App;
