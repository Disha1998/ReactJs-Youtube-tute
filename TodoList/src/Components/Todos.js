import React from 'react'
import { Todoitem } from '../Components/Todoitem';


export const Todos = (props) => {
    console.log(props.todos)
    return (
        <div className="container">
            <h3 className="text-center my-5">Todos List</h3>
            {props.todos.map((todo) => {
                return <Todoitem todo={todo} key={todo.sno} onDelete = {props.onDelete}/>

            }
            
            )}
          
           
            
        </div>
    )
}
