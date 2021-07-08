import React from 'react'
import './ToDo.css'

function ToDo (props) {

    /* For a while I thought about using <input> tags rather than <li> tags. That way, I would be able to edit the elements of the
    list without the need to edit state and all. However, for some reason the removeTask() functions don't work as expected when
    they deal with <input> tags rather than <li> tags. It was a very weird thing and made no sense. I get it's a React bug or something.
    Anyway, so in light of that, and in addition of the fact that this feels like the more React-y way to do things, I went this way. */
    function toggleEditMode() {
        props.toggleEditMode();
    }


    function handleSubmit(event) {
        event.preventDefault();
        const text = event.target.querySelector('input[type = "text"]').value;
        // const text = event.target.querySelector('textarea').value;
        props.replacer(text, props.index);
        /* You can't give the submit button an onClick={toggleEditMode} since if you do it stops being a submit buttion (the form)
           won't submit when you press the button*/
        props.toggleEditMode();
    }
    function displayEditPack() {
        //If you use value rather than defaultValue, you won't be able to edit (the text remains fixed no matter how hard you try to type something).
        return (
            <form className='ToDo' onSubmit={handleSubmit}>
                {/* I tried having textAreas rather than text input tags, but I wasn't able to automatically size them to the text in them.*/}
                <input type='text' className='editor' defaultValue={props.text}></input>
                {/* You cannot use a button rather than an input of type submit. You cannot nest a button inside an input of type submit. */}
                <input type='submit' value='💭' className='submitEdit'></input>
            </form>
        )
    }


    function handleButtonClick() {
        props.removeTask(props.index);
    }
    function displayViewOnlyPack() {
        return (
            <ul className='ToDo'>
                <li onClick={toggleEditMode}>{props.text}</li>
                <button onClick={handleButtonClick}><i className='fa fa-check-square'></i></button>
            </ul>
        )
    }
    
    return (

        <div> 
            {props.editMode === true ? displayEditPack() : displayViewOnlyPack()}
        </div> 

    )
}

export default ToDo;