import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Addtask } from '../Redux/Slices/TodoSlice';


export const NewItem = () => {
    const [newTodo, setnewTodo] = useState({
        id:Math.random(),
        title:"",
        description:"",
        isDone:false
    });
const dispatch = useDispatch();
const handleAdd = () => {
dispatch(Addtask(newTodo));
};



    return (
        <div>
            <Form>
  <Form.Group className="mb-3" >
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="entrer title" onChange={(e)=>setnewTodo({...newTodo,title:e.target.value})}/>   
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="entrer description" onChange={(e)=>setnewTodo({...newTodo,description:e.target.value})}/>
    </Form.Group>
  <Button style={{width:"100%",background:"#0e88ec"}} variant="primary" onClick={handleAdd}>
    Add todo
  </Button>
</Form>
        </div>
    )
}
