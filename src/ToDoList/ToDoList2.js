import React from 'react'
import ToDo2 from '../ToDo/ToDo2.js'
import './ToDoList.css'

function ToDoList2(props) {
    return (
        /* Note that you cannot directly return a JS thing: if you don't wrap this in <div>s, it breaks down. */
         <div id='ToDoList'>
            {/* For some reason sometimes if you use the name of a real attribute as prop, the code breaks down. 
            Before calling the prop “index” (in ToDoList.js) I called it “key”, and didn’t work. */}
            {props.tasks.map((task) => <ToDo2 todo={task} state={props.tasks} stateSetter={props.stateSetter} removeTask={props.removeTask} toggleEditMode={props.toggleEditMode} editer={props.editer}/>)}
        </div>      
    )
}

export default ToDoList2;
