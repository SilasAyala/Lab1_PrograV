import React, {useState} from 'react';

//importamos componentes
import GoalList  from './components/GoalList/GoalList.js';
import NewGoal from './components/NewGoal/NewGoal.js';

import './App.css';

function App() {

    const [weekGoals, setweekGoals] = useState([
        {id: 'wg1', text: 'Bañar a los perros.' },
        {id: 'wg2', text: 'Leer el capitulo dos del libro.' },
        {id: 'wg3', text: 'Hacer tres dias ejercicio.' },
        {id: 'wg4', text: 'Hacer la tarea del curso. '}
    ]);

    const addNewGoalHandler = (newGoal) => {
      setweekGoals(weekGoals.concat(newGoal));
      console.log(weekGoals);
    }

  return (
    <div>
      <h2 className='goals-title'> Objetivos de la Semana </h2>
      <NewGoal onAddGoal={addNewGoalHandler} /> {/*componente para agregar nueva meta*/}
      <GoalList goals={weekGoals} /> {/*Importamos componente Lista de Metas */}
    </div>
  );
}

export default App;
