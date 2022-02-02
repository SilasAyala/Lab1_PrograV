import React, {useState} from "react";

import './NewGoal.css';

const NewGoal = (props) =>{
    const [inputText, setInputText] = useState('');

    const [inputFecha, setFechaText] = useState('')

    const newGoalHandler = (event) => {
        event.preventDefault();
        
        const newGoal = {
            id: 'wg' + Math.floor(Math.random() * 100).toString(),
            text: inputText,
            fecha: inputFecha           
        }
        props.onAddGoal(newGoal);
        setInputText('');
        setFechaText('');
    }

    const textChangeHandler = (event) => {
        setInputText(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setFechaText(event.target.value)
    }



    return(
        <form className="new-goal" onSubmit={newGoalHandler}>
            <input type='date' value={inputFecha}onChange={dateChangeHandler}/>
            <input type='text' value={inputText} onChange={textChangeHandler}/>
            <button type='submit'> Nueva Meta </button>
        </form>
    );
}

export default NewGoal;