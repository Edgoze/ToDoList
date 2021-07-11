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
    function auto_grow(event){
        event.target.style.height = "5px";
        event.target.style.height = (event.target.scrollHeight)+"px";
    }
    //I'm using event rather than {target} because I need to use event.preventDefault()
    function handleSubmit(event) {
        event.preventDefault();
        let newToDoObject = {
            text: event.target.querySelector('textarea').value,
            editMode: false,
            //Note this little smart move.
            index: props.tasks.length,
        }
        props.addTask(props.stateSetter, newToDoObject);
        //After you submit, this will make the textarea read 'Type here!' again.
        event.target.querySelector('textarea').value = 'Type here!';
        //After you submit, this will make the textarea go back to its initial height.
        event.target.querySelector('textarea').style.height = "33px";
    }
    return (
        <section className='AddBar'>
            <h1>{props.dayOfTheWeek}</h1>
            <form onSubmit={handleSubmit}>
                {/* From what I've seen, buttons of type submit work the same as inputs of type submit. */}
                <textarea defaultValue='Type here!' onClick={handleClick} onKeyPress={auto_grow} onKeyUp={auto_grow}></textarea>
                <button className='fa fa-plus' type='submit'></button>
            </form>
        </section>
    )
}

export default AddBar2;