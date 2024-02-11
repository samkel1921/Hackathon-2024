import * as React from 'react';
import { useState } from 'react';
import Tasks from './Tasks';
import './App.css';

function App() {
  const [desc, setDesc] = useState('');

  const [tasks, setTasks] = useState([]);
  
  const [nextId, setNextId] = useState(0);
  const handleClick = () => {
    setTasks([
      ...tasks,
      {id: nextId, desc: desc}
    ]);
    setNextId(
      nextId + 1
    )
  };

  const handleDelete = (id) => {
    setTasks(
      tasks.filter(a =>
        a.id !== id)
    )
  };

  return (
    <div>
      <header>
        RememBrain
      </header>
      <Tasks task_list={tasks} act={handleDelete}/>
      <div className='button'>
        <input 
        value ={desc}
        onChange={e => setDesc(e.target.value)}
        />
        <button
          className='updater'
          onClick={handleClick}>
          Add task
        </button>
      </div>
    </div>
  );
}

export default App;
