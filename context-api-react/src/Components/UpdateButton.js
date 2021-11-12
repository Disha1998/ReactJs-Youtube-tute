import React from "react";
import { commonContext } from "./commonContext";

function UpdateButton(){
    return (
        <commonContext.Consumer>
          {({ updateColor }) => 
          <div>
          <button onClick={()=>updateColor('green')}>Update Button Green  </button> 
          <button onClick={()=>updateColor('blue')}>Update Button Blue </button> 
          <button onClick={()=>updateColor('grey')}>Update Button Grey</button> 

          </div>
          }
        </commonContext.Consumer>
      );
}
   

export default UpdateButton;
