import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react'
import { Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Edittask } from '../Redux/Slices/TodoSlice';

export const EditModal = ({item}) => {
  const [editedtask, seteditedtask] = useState({
    
    title:"",
    description:"",
    isDone:false
});
const dispatch = useDispatch()
const handleEdit=()=> {

dispatch(Edittask({...editedtask, id:item.id}));
}
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     
  <Form.Group className="mb-3" >
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="entrer title" onChange ={(e)=> seteditedtask({...editedtask,title: e.target.value})} />   
 
 
 
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="entrer description" 
    onChange={
      (e)=> seteditedtask({...editedtask,description: e.target.value})}
      
      />
    
   
    </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" >
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleEdit();
             handleClose();
             }}
             >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}
