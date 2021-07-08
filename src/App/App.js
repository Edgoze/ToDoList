import React, {useState} from 'react'
import './App.css';
import AddBar from '../AddBar/AddBar.js'
import ToDoList from '../ToDoList/ToDoList.js'

//!!! This is the one we tweaked. If you want to go back to how it was, delete the mondayEditMode stuff and the toggleMondayEditMode(), and set up everythig agian with editMode

function App() {

  //All of these (the "dayOfTheWeekTasks" states) are arrays of Strings.
  const [mondayTasks, mondayTasksSetter] = useState([]);
  function addMondayTask(newMondayTask) {
    mondayTasksSetter((prev) => [...prev, newMondayTask])
  }
  function removeMondayTask(indexOfTaskToRemove) {
    mondayTasksSetter(() => {
      return mondayTasks.filter((task, index) => {
        return indexOfTaskToRemove !== index;
      })
    })
  }
  const[mondayEditMode, setMondayEditMode] = useState(false);
  function toggleMondayEditMode() {
    setMondayEditMode(!mondayEditMode);
  }
  function replaceMondayTask(newString, indexToReplaceAt) {
    mondayTasksSetter(() => {
      return mondayTasks.map((element, index) => {
        if (index === indexToReplaceAt) {
          return newString;
        }
        return element;
      })
    })
  }

  const [tuesdayTasks, tuesdayTasksSetter] = useState([]);
  function addTuesdayTask(newTuesdayTask) {
    tuesdayTasksSetter((prev) => [...prev, newTuesdayTask])
  }
  function removeTuesdayTask(indexOfTaskToRemove) {
    tuesdayTasksSetter(() => {
      return tuesdayTasks.filter((task, index) => {
        return indexOfTaskToRemove !== index;
      })
    })
  }
  const[tuesdayEditMode, setTuesdayEditMode] = useState(false);
  function toggleTuesdayEditMode() {
    setTuesdayEditMode(!tuesdayEditMode);
  }
  function replaceTuesdayTask(newString, indexToReplaceAt) {
    tuesdayTasksSetter(() => {
      return tuesdayTasks.map((element, index) => {
        if (index === indexToReplaceAt) {
          return newString;
        }
        return element;
      })
    })
  }

  // const [wednesdayTasks, wednesdayTasksSetter] = useState([]);
  // function addWednesdayTask(newWednesdayTask) {
  //   wednesdayTasksSetter((prev) => [...prev, newWednesdayTask])
  // }
  // function removeWednesdayTask(indexOfTaskToRemove) {
  //   wednesdayTasksSetter(() => {
  //     return wednesdayTasks.filter((task, index) => {
  //       return indexOfTaskToRemove !== index;
  //     })
  //   })
  // }

  // const [thursdayTasks, thursdayTasksSetter] = useState([]);
  // function addThursdayTask(newThursdayTask) {
  //   thursdayTasksSetter((prev) => [...prev, newThursdayTask])
  // }
  // function removeThursdayTask(indexOfTaskToRemove) {
  //   thursdayTasksSetter(() => {
  //     return thursdayTasks.filter((task, index) => {
  //       return indexOfTaskToRemove !== index;
  //     })
  //   })
  // }

  // const [fridayTasks, fridayTasksSetter] = useState([]);
  // function addFridayTask(newFridayTask) {
  //   fridayTasksSetter((prev) => [...prev, newFridayTask])
  // }
  // function removeFridayTask(indexOfTaskToRemove) {
  //   fridayTasksSetter(() => {
  //     return fridayTasks.filter((task, index) => {
  //       return indexOfTaskToRemove !== index;
  //     })
  //   })
  // }

  // const [saturdayTasks, saturdayTasksSetter] = useState([]);
  // function addSaturdayTask(newSaturdayTask) {
  //   saturdayTasksSetter((prev) => [...prev, newSaturdayTask])
  // }
  // function removeSaturdayTask(indexOfTaskToRemove) {
  //   saturdayTasksSetter(() => {
  //     return saturdayTasks.filter((task, index) => {
  //       return indexOfTaskToRemove !== index;
  //     })
  //   })
  // }

  // const [sundayTasks, sundayTasksSetter] = useState([]);
  // function addSundayTask(newSundayTask) {
  //   sundayTasksSetter((prev) => [...prev, newSundayTask])
  // }
  // function removeSundayTask(indexOfTaskToRemove) {
  //   sundayTasksSetter(() => {
  //     return sundayTasks.filter((task, index) => {
  //       return indexOfTaskToRemove !== index;
  //     })
  //   })
  // }

  // const [atemporaryTasks, atemporaryTasksSetter] = useState([]);
  // function addAtemporaryTask(newAtemporaryTask) {
  //   atemporaryTasksSetter((prev) => [...prev, newAtemporaryTask])
  // }
  // function removeAtemporaryTask(indexOfTaskToRemove) {
  //   atemporaryTasksSetter(() => {
  //     return atemporaryTasks.filter((task, index) => {
  //       return indexOfTaskToRemove !== index;
  //     })
  //   })
  // }

  return (
    <div id='app'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <section id='Monday'>
        <AddBar addTask={addMondayTask} dayOfTheWeek='Monday'/>
        <ToDoList tasks={mondayTasks} removeTask={removeMondayTask} toggleEditMode={toggleMondayEditMode} editMode={mondayEditMode} replacer={replaceMondayTask}/>
      </section>
      <section id='Tuesday'>
        <AddBar addTask={addTuesdayTask} dayOfTheWeek='Tuesday'/>
        <ToDoList tasks={tuesdayTasks} removeTask={removeTuesdayTask} toggleEditMode={toggleTuesdayEditMode} editMode={tuesdayEditMode} replacer={replaceTuesdayTask}/>
      </section>
      {/* <section id='Wednesday'>
        <AddBar addTask={addWednesdayTask} dayOfTheWeek='Wednesday'/>
        <ToDoList tasks={wednesdayTasks} removeTask={removeWednesdayTask} toggleEditMode={toggleEditMode} editMode={editMode} replacer={replaceMondayTask}/>
      </section>
      <section id='Thursday'>
        <AddBar addTask={addThursdayTask} dayOfTheWeek='Thursday'/>
        <ToDoList tasks={thursdayTasks} removeTask={removeThursdayTask} toggleEditMode={toggleEditMode} editMode={editMode} replacer={replaceMondayTask}/>
      </section>
      <section id='Friday'>
        <AddBar addTask={addFridayTask} dayOfTheWeek='Friday'/>
        <ToDoList tasks={fridayTasks} removeTask={removeFridayTask} toggleEditMode={toggleEditMode} editMode={editMode} replacer={replaceMondayTask}/>
       </section>
      <section id='Saturday'>
        <AddBar addTask={addSaturdayTask} dayOfTheWeek='Saturday'/>
        <ToDoList tasks={saturdayTasks} removeTask={removeSaturdayTask} toggleEditMode={toggleEditMode} editMode={editMode} replacer={replaceMondayTask}/>
      </section>
      <section id='Sunday'>
        <AddBar addTask={addSundayTask} dayOfTheWeek='Sunday'/>
        <ToDoList tasks={sundayTasks} removeTask={removeSundayTask} toggleEditMode={toggleEditMode} editMode={editMode} replacer={replaceMondayTask}/>
      </section>
      <section id='Atemporary'>
        <AddBar addTask={addAtemporaryTask} dayOfTheWeek='Atemporary'/>
        <ToDoList tasks={atemporaryTasks} removeTask={removeAtemporaryTask} toggleEditMode={toggleEditMode} editMode={editMode} replacer={replaceMondayTask}/>
      </section> */}
    </div>
  )
}

export default App;
