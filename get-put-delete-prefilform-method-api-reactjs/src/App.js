// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { id } from "postcss-selector-parser";

function App() {
  const [data, setData] = useState([]);

  // this below 3 states for pre-field form

  const [Uid, setUid] = useState("");
  const [title, settitle] = useState("");
  const [body, setBody] = useState("");
  //

  // when we update then how to find which user is updated so we can finf that through ID
  const[userId,setUserid]=useState(null)


  useEffect(() => {
    GetList();
  }, []);
  // console.log(data);

  // get the data (in useEffect() you can also add this code fot getAPI {copy the code from 'fetch'})
  function GetList() {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        // console.log('result',resp)
        setData(resp);
        setUid(resp[0].userId);
        settitle(resp[0].title);
        setBody(resp[0].body);
        setUserid(resp[0].id)
      });
    });
  }

  // DELETE the user
  function DeleteUser(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
        GetList();
      });
    });
  }
  //

  function selectuser(id) {
    let item = data[id - 1];

    console.warn(data[id - 1]);
    setUid(item.userId);
    settitle(item.title);
    setBody(item.body);
    setUserid(item.id)

  }

  //for update the user
    function updateUser(){
     let itemes = {Uid,title,body,userId}
      
        fetch(`https://jsonplaceholder.typicode.com/posts${id}`, {
          method: "PUT",
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify(itemes)
        }).then((result) => {
          result.json().then((resp) => {
            console.log(resp);
            GetList();
          });
        });
      }




  // 
  return (
    <div className="App">
      <h1>GET/PUT/DELETE/PRE-Field form Method API</h1>
      <table border="">
        <tr>
          <td>Id</td>
          <td>User Id</td>
          <td>Title</td>
          <td>Body</td>
          <td>Operetion</td>
        </tr>

        {data.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.userId}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <button onClick={() => DeleteUser(item.id)}>Delete</button>
            <br />
            <br />
            <button onClick={() => selectuser(item.id)}>Update</button>
            <br />
            <br />
          </tr>
        ))}
      </table>
      <div>
        <input type="text" value={Uid} onChange={(e)=>setUid(e.target.value)}></input>
        <br />
        <br />
        <input type="text" value={title} onChange={(e)=>settitle(e.target.value)}></input>
        <br />
        <br />
        <input type="text" value={body} onChange={(e)=>setBody(e.target.value)}></input>
        <br />
        <br />
        <button onClick={updateUser}>Update User</button>
      </div>
    </div>
  );
}

export default App;
