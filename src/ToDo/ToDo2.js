import React from 'react'
import './ToDo.css'

function ToDo2 (props) {

    function displayViewOnlyPack() {
        return (
            <ul className='ToDo'>
                <li className='viewOnly' onClick={toggleEditMode}>{props.todo.text}</li>
                <button className='fa fa-check-square' type='submit' onClick={handleButtonClick} ></button>
            </ul>
        )
    }
    /* For a while I thought about using <input> tags rather than <li> tags. That way, I would be able to edit the elements of the
    list without the need to edit state and all. However, for some reason the removeTask() functions don't work as expected when
    they deal with <input> tags rather than <li> tags. It was a very weird thing and made no sense. I get it's a React bug or 
    something. Anyway, so in light of that, and in addition of the fact that this feels like the more React-y way to do things, 
    (having a state and editing and stuff) I went this way. */
    function toggleEditMode() {
        props.toggleEditMode(props.state, props.stateSetter, props.todo.index);
    }
    function handleButtonClick() {
        props.removeTask(props.state, props.stateSetter, props.todo.index);
    }


    function displayEditPack() {
        //If you use value rather than defaultValue, you won't be able to edit (the text remains fixed no matter how hard you try to type something).
        return (
            <form className='ToDo' onSubmit={handleSubmit}>
                {/* I tried having textAreas rather than text input tags, but I wasn't able to automatically size them to 
                the text in them.*/}
                <input className='editor' type='text' defaultValue={props.todo.text}></input>
                {/* You can only use a button rather than an input of type submit if you make the type of the button 'submit' */}
                {/* Unrelated FYI: you can't give an INPUT of type submit an onClick={toggleEditMode} since if you do it stops being a 
                submit button (for some reason) and the form won't submit when you click it */}
                <button className='fa fa-inbox' type='submit'></button>
            </form>
        )
    }
    function handleSubmit(event) {
        event.preventDefault();
        const text = event.target.querySelector('input[type = "text"]').value;
        props.editer(props.state, props.stateSetter, props.todo.index, text);
    }
    
    return (
        <div> 
            {props.todo.editMode === true ? displayEditPack() : displayViewOnlyPack()}
        </div> 
    )
}

export default ToDo2;
