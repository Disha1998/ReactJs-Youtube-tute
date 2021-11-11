
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>HOC-Higher-Order Component</h1>
      <HOCYellow cmp={Counter}/>
      <HOCBlue cmp={Counter}/>

    

         </div>
  );
}

// New Component
function HOCYellow(props){
  return(
    <h2 style={{background:"yellow",width:"200px"}}>Yellow<props.cmp /></h2>
  )
}


function HOCBlue(props){
  return(
    <h2 style={{background:"blue",width:"200px"}}>Blue<props.cmp /></h2>
  )
}
// New component
function Counter(){
  const [count,setcount]=useState(0)
  return(
    <div>
      
      <h3>{count}</h3>
      <button onClick={()=>setcount(count+1)}>Update </button>
    </div>
  )
}

export default App;



