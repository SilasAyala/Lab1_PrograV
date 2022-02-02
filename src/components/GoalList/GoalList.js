import React, {useState} from "react";

import './GoalList.css'

//importamos css
const GoalList = (props) => {

    const [inputText, setInputText] = useState('');

    const checkedHandler = (event) => {
        if ((event.target.checked) === true ){
           setInputText('checked-goal-list-item');
        }else {
           setInputText('goal-list-item');
        }
        
    }

    


    console.log(props.goals);
    
    return(
        <ul className='goal-list'>
            {props.goals.map((goal) => {
                return <li className={inputText} key={goal.id}> {goal.text} 
                <input onChange={checkedHandler} type='checkbox' className="checkbox"/> 
                <br/><br/>
                <label>{goal.fecha}</label>
                </li>               
            })}
        </ul>
        
    );

}

export default GoalList;