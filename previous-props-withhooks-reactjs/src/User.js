
import React, {useEffect,useRef} from 'react'



export default function User(props){
    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count;
        // console.log(lastVal)
    })
    const previousVal=lastVal.current
    console.log(previousVal)
    return(
        <div>
            <h1>current Value : {props.count}</h1>
            <h1>Previous Value : {previousVal}</h1>
            
            </div>
    )
}