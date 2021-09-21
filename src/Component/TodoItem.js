import React from 'react'
import { useDispatch } from 'react-redux';
import { Deletetask, isDonetask } from '../Redux/Slices/TodoSlice';
import { EditModal } from './EditModal';

export const TodoItem = ({item}) => {
const dispatch = useDispatch();
const handledelete = () =>{


    dispatch(Deletetask({id: item.id}))
};

const handleDone = () =>{


    dispatch(isDonetask({id: item.id}));
};
    return (
        <div className="todo-item">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
                       <p>{item.isDone?"done":"not done"}</p>

                       <div className="bot">
      <button className="btn btn-danger" onClick={ handledelete}   >delete </button>
     
     <EditModal item={item}/>
      <button className="btn btn-danger" onClick={ handleDone}       >Done </button>
      </div>
        </div>
    )
}
