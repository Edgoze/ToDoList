import React from 'react'
import './AddBar.css'

function AddBar2(props) {
    // This makes the text input blank when you click
    function handleClick({target}) {
    /* I don't want the stuff in the box to be erased when you are writing a reminder and you click the box to correct a 
       typo or something. */
        if (target.value === 'Type here!') {
            target.value = '';
        }
    }
    //I'm using event rather than {target} because I need to use event.preventDefault()
    function handleSubmit(event) {
        event.preventDefault();
        let newToDoObject = {
            text: event.target.querySelector('input[type = "text"]').value,
            editMode: false,
            //Note this little smart move.
            index: props.tasks.length,
        }
        props.addTask(props.stateSetter, newToDoObject);
        //After you submit, this will make the text input read 'Type here!' again.
        event.target.querySelector('input[type = "text"]').value = 'Type here!';
    }
    return (
        <div id='AddBar'>
            <h1>{props.dayOfTheWeek}</h1>
            <form onSubmit={handleSubmit}>
                {/* The size attribute allows us to make inputs of type 'text' longer (as in horizontally longer) */}
                {/* From what I've seen, buttons of type submit work the same as inputs of type submit. */}
                <input className='textField' type='text' defaultValue='Type here!' size='33' onClick={handleClick}></input>
                <button className='fa fa-plus' type='submit'></button>
            </form>
        </div>
    )
}

export default AddBar2;
