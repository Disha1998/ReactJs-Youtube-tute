// import logo from './logo.svg';
import User from './User';
import './App.css';
import React from 'react';


function App() {
  const [Counter,setCounter]=React.useState(0)
  return (
    <div className="App">
<User count={Counter}/>
<button onClick={()=>setCounter(Math.floor(Math.random()*10))}>Update Counter</button>
    </div>
  );
}

export default App;
