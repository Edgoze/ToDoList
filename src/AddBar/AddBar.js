import React from 'react'
import './AddBar.css'

function AddBar(props) {
    function handleSubmit(event) {
        event.preventDefault();
        const text = event.target.querySelector('input[type = "text"]').value;
        props.addTask(text);
        //After you submit, this will make the text input read 'Type here!' again.
        event.target.querySelector('input[type = "text"]').value = 'Type here!';
    }
    // This makes the text input blank when you click
    function handleClick({target}) {
        //I don't want the stuff in the box to be erased when you are writing a reminder and you click the box to correct a typo or something.
        if (target.value === 'Type here!') {
            target.value = '';
        }
    }
    return (
        <div id='AddBar'>
            <h1>{props.dayOfTheWeek}</h1>
            <form onSubmit={handleSubmit}>
                {/* I left the type='text' inputs rather tha using a <textarea> tag because with that one I actually
                    have to click the submit button for things to submit, whereas with type='text' I can press the return 
                    KEYBOARD button to submit. */}
                    {/* The size attribute allows us to make inputs of type 'text' longer (as in horizontally longer) */}
                <input type='text' defaultValue='Type here!' size='27' onClick={handleClick} className='textField'></input>
                <input type='submit' value='Add To Do'></input>
            </form>
        </div>
    )
}

export default AddBar;