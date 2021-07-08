import React from 'react'
import ToDo from '../ToDo/ToDo.js'
import './ToDoList.css'

function ToDoList(props) {
    return (
         <div id='ToDoList'>
            {/* For some reason sometimes if you use the name of a real attribute as prop, the code breaks down. 
            Before calling the prop “index” (in ToDoList.js) I called it “key”, and didn’t work. */}
                {props.tasks.map((task, index) => <ToDo text={task} index={index} removeTask={props.removeTask} toggleEditMode={props.toggleEditMode} editMode={props.editMode} replacer={props.replacer}/>)}
        </div>        
    )
}

export default ToDoList;