import React, { useState } from 'react'
import './ToDo.css'
import { TiDelete } from 'react-icons/ti';

export default function ToDoList() {


const [task , setTask]=useState([])
const [ToDo , setToDo]=useState("")
const [TaskCount , setTaskCount]=useState(1)

const AddTask = () =>{
    const nweTask ={
        id:TaskCount , text : ToDo
    }

    setTaskCount(TaskCount+1)

    setTask(task.concat(nweTask))
    setToDo("")
}

const deleteTask = (id) => {

    let x = task.filter((tasks=> tasks.id !== id ))
    setTask(x)

     
}






  return (
    <div className='Form'>
    <h1>Add your Tasks</h1>

    <>

    <input 
    type="text" name="task"
    onChange={(e) => setToDo(e.target.value)}
    value={ToDo}
    
    />


    <button onClick={AddTask} type="button">Add!</button>

</>


    

    <div className='task'>
        {task.map((t)=>(
        <div className='text'>
        <h4>{t.text}</h4> 
        <div className='button'>
        <i onClick={() => deleteTask(t.id)} className='del'><TiDelete></TiDelete></i>
      
        </div>

     

    
        </div>

           ) )}

    </div>





    </div>
  )
}
