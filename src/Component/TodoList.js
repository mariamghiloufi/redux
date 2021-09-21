import React, { useState } from 'react';
import {useSelector} from "react-redux";
import { NewItem } from './NewItem';
//import {todo} from './Redux/Store';
import { TodoItem } from './TodoItem';

function TodoList() {

 const todos = useSelector(state => state.todo.todolist);
 const [isDone, setisDone] = useState(false);
const handledone=()=>{
    setisDone(!isDone)
}

    return (
        <div className="todo-list">

            <NewItem/>
            <button onClick ={handledone}>
              {isDone? "Show unDone": "Show Done"}</button>

           
{todos.filter((item)=>item.isDone=== isDone).map((item)=>(
<TodoItem item={item}/>
    ))}      


        </div>
    )
}

export default TodoList
