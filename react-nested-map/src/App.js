import logo from './logo.svg';
import './App.css';
import React from 'react';
import { data } from 'browserslist';
import User from './user';





function App() {
  const student =[
    { name:'john',email:'john@test.com',address:[
      {Hn:"10",city:"Gandhinagar"},
      {Hn:"31",city:"Delhi"},
      {Hn:"14",city:"Ahmedabad"}
      
    ]},
    {name:'keli',email:'keli@test.com',address:[
      {Hn:"100",city:"Gandhinagar"},
      {Hn:"130",city:"Gandhinagar"},
      {Hn:"210",city:"Gandhinagar"}
      
    ]},
    {  name:'sam',email:'sam@test.com',address:[
      {Hn:"107",city:"Gandhinagar"},
      {Hn:"109",city:"Gandhinagar"},
      {Hn:"104",city:"Gandhinagar"}
      
    ]},
  ]

  return (
    <div className="App">
      

      {/* How to Reuse one component  */}

      {
        student.map((data)=>
        <h1>{<User pro={data}/>}</h1>)
        

      }


            {/* map() and nested map() */}

     {/* <table>
       <tbody>
         <tr>
           <td>Sr.No</td>
           <td>Name</td>
           <td>Email</td>
           <td>Address</td>
         </tr>
       
        {
          //map()--simple
          student.map((data, i)=>
            <tr key={i}>
              <td>{i+1}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{
              //map()-->nested
              data.address.map((ad)=>
              <tr>
                <td>{ad.Hn}</td>
                <td>{ad.city}</td>
                
              </tr>
              
              )}</td>

          </tr>
          )
        }
          </tbody>
     
     </table> */}
    </div>
  );
}

export default App;
