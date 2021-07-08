import React, {useState} from 'react'
import './App.css';
import AddBar2 from '../AddBar/AddBar2.js'
import ToDoList2 from '../ToDoList/ToDoList2.js'

function App2() {

  /* All of these (the "dayOfTheWeekTasks" states) are arrays of objects. They used to be arrays of Strings,
     but using objects works better becaues that way I can give them an editMode field which allows me to change
     individual toDos to edit mode rather than entire day sections (see version 1 of the program (App and company))*/
  const [mondayTasks, mondayTasksSetter] = useState([]);
  const [tuesdayTasks, tuesdayTasksSetter] = useState([]);
  const [wednesdayTasks, wednesdayTasksSetter] = useState([]);
  const [thursdayTasks, thursdayTasksSetter] = useState([]);
  const [fridayTasks, fridayTasksSetter] = useState([]);
  const [saturdayTasks, saturdayTasksSetter] = useState([]);
  const [sundayTasks, sundayTasksSetter] = useState([]);
  const [atemporaryTasks, atemporaryTasksSetter] = useState([]);

  function addTask(someStateSetter, someNewElement) {
    someStateSetter((prev) => [...prev, someNewElement])
  }
  function removeTask(someState, someStateSetter, indexOfTaskToRemove) {
    someStateSetter(() => {
      //We DO NOT return yet. If we do, the code will never reach line 31.
      let newState = someState.filter((task, index) => {
        /* The reason why this works is because given how we set up the ToDo indexes,
           the index of the todo should match the index of its position in the array. */
        return indexOfTaskToRemove !== index;
      })
      //After removing a ToDo, I need to update the indexes of the remaining ToDos
      return newState.map((task, index) => {
        //Note that you can return an object directly (no need to set up a variable).
        return {
          text: task.text,
          editMode: task.editMode,
          index: index,
        }
      })
    })
  }
  function toggleEditMode(someState, someStateSetter, indexOfToDoToToggle) {
    someStateSetter(() => {
      return someState.map((element, index) => {
        if (index === indexOfToDoToToggle) {
          return {
            text: element.text,
            editMode: true,
            index: element.index,
          }
        }
          return element;
      })
    })
  }
  function editTask(someState, someStateSetter, indexToReplaceAt, newText) {
    someStateSetter(() => {
      return someState.map((element, index) => {
        if (index === indexToReplaceAt) {
          return {
              text: newText,
              //NOTE THIS STEP: we are setting editMode back to false.
              editMode: false,
              index: index,
          };
        }
        return element;
      })
    })
  }

  return (
    <div id='app'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <section id='Monday'>
        <AddBar2 dayOfTheWeek='Monday' tasks={mondayTasks} stateSetter={mondayTasksSetter} addTask={addTask}/>
        <ToDoList2 tasks={mondayTasks} stateSetter={mondayTasksSetter} removeTask={removeTask} toggleEditMode={toggleEditMode} editer={editTask}/>
      </section>
      <section id='Tuesday'>
        <AddBar2 dayOfTheWeek='Tuesday' tasks={tuesdayTasks} stateSetter={tuesdayTasksSetter} addTask={addTask}/>
        <ToDoList2 tasks={tuesdayTasks} stateSetter={tuesdayTasksSetter} removeTask={removeTask} toggleEditMode={toggleEditMode} editer={editTask}/>
      </section>
      <section id='Wednesday'>
        <AddBar2 dayOfTheWeek='Wednesday' tasks={wednesdayTasks} stateSetter={wednesdayTasksSetter} addTask={addTask}/>
        <ToDoList2 tasks={wednesdayTasks} stateSetter={wednesdayTasksSetter} removeTask={removeTask} toggleEditMode={toggleEditMode} editer={editTask}/>
      </section>
      <section id='Thursday'>
        <AddBar2 dayOfTheWeek='Thursday' tasks={thursdayTasks} stateSetter={thursdayTasksSetter} addTask={addTask}/>
        <ToDoList2 tasks={thursdayTasks} stateSetter={thursdayTasksSetter} removeTask={removeTask} toggleEditMode={toggleEditMode} editer={editTask}/>
      </section>
      <section id='Friday'>
        <AddBar2 dayOfTheWeek='Friday' tasks={fridayTasks} stateSetter={fridayTasksSetter} addTask={addTask}/>
        <ToDoList2 tasks={fridayTasks} stateSetter={fridayTasksSetter} removeTask={removeTask} toggleEditMode={toggleEditMode} editer={editTask}/>
       </section>
      <section id='Saturday'>
        <AddBar2 dayOfTheWeek='Saturday' tasks={saturdayTasks} stateSetter={saturdayTasksSetter} addTask={addTask}/>
        <ToDoList2 tasks={saturdayTasks} stateSetter={saturdayTasksSetter} removeTask={removeTask} toggleEditMode={toggleEditMode} editer={editTask}/>
      </section>
      <section id='Sunday'>
        <AddBar2 dayOfTheWeek='Sunday' tasks={sundayTasks} stateSetter={sundayTasksSetter} addTask={addTask}/>
        <ToDoList2 tasks={sundayTasks} stateSetter={sundayTasksSetter} removeTask={removeTask} toggleEditMode={toggleEditMode} editer={editTask}/>
      </section>
      <section id='Atemporary'>
        <AddBar2 dayOfTheWeek='Atemporary' tasks={atemporaryTasks} stateSetter={atemporaryTasksSetter} addTask={addTask}/>
        <ToDoList2 tasks={atemporaryTasks} stateSetter={atemporaryTasksSetter} removeTask={removeTask} toggleEditMode={toggleEditMode} editer={editTask}/>
      </section> 
    </div>
  )
}

export default App2;