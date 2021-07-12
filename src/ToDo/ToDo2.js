import React from 'react'
import './ToDo.css'

function ToDo2 (props) {

    /* For a while I thought about using <input> tags rather than <li> tags. That way, I would be able to edit the elements of the
    list without the need to edit state and all. However, for some reason the removeTask() functions don't work as expected when
    they deal with <input> tags rather than <li> tags. It was a very weird thing and made no sense. I guess it's a React bug or 
    something. Anyway, so in light of that, and in addition of the fact that this feels like the more React-y way to do things, 
    (having a state and editing and stuff) I went this way. */
    function toggleEditMode() {
        props.toggleEditMode(props.state, props.stateSetter, props.todo.index);
    }
    function handleButtonClick() {
        props.removeTask(props.state, props.stateSetter, props.todo.index);
    }
    function displayViewOnlyPack() {
        return (
            <ul className='ToDoContainer'>
                <li className='viewOnly' onClick={toggleEditMode}>{props.todo.text}</li>
                <button className='fa fa-check-square' type='submit' onClick={handleButtonClick} ></button>
            </ul>
        )
    }


    function auto_grow(event){
        event.target.style.height = "5px";
        event.target.style.height = (event.target.scrollHeight)+"px";
    }
    function handleSubmit(event) {
        event.preventDefault();
        const text = event.target.querySelector('textarea').value;
        props.editer(props.state, props.stateSetter, props.todo.index, text);
    }
    function displayEditPack() {
        //If you use value rather than defaultValue, you won't be able to edit (the text remains fixed no matter how hard you try to type something).
        return (
            <form className='ToDoContainer' onSubmit={handleSubmit}>
                <textarea defaultValue={props.todo.text} onKeyPress={auto_grow} onKeyUp={auto_grow}></textarea>
                {/* Unrelated FYI: you can't give an INPUT of type submit an onClick={toggleEditMode} since if you do it stops being a 
                submit button (for some reason) and the form won't submit when you click it */}
                <button className='fa fa-inbox' type='submit'></button>
            </form>
        )
    }
    
    return (
        <section className='ToDo'> 
            {props.todo.editMode === true ? displayEditPack() : displayViewOnlyPack()}
        </section> 
    )
}

export default ToDo2;

