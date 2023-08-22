import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tasklist, setTaskList] = useState([]);
  const [newtask,  setNewTask] = useState("");
  const handleValue = (e) => {
    setNewTask(e.target.value);
  }
  const addTask = () => {
    let taskObj = {
      id: tasklist.length === 0 ? 1 : tasklist[tasklist.length - 1].id + 1,
      task: newtask,
      isCompleted: false
    }
    setTaskList([...tasklist, taskObj]);
  }
  const deleteTask = (id) =>{
    setTaskList(tasklist.filter((taskitem) => taskitem.id !== id));
  }
  const setCompleted = (id) => {
    setTaskList(
      tasklist.map((item) => {
        if(item.id === id){
          return {...item, isCompleted: true};
        } else {
          return item;
        }
      })
    );
    
  }
  return (
    <div className='m-5'>
      <h1>TaskList</h1>
      <input className='form-control' onChange={handleValue} /><br />
      <button className=' btn btn-warning mb-3' onClick={addTask}>Add</button>
      {tasklist.map((item) => (
        <div className= {item.isCompleted ? 'd-flex mb-3 bg-danger': 'd-flex mb-3'}>
          <h3 className='my-auto col-6'>{item.task}</h3>
          <button className='btn btn-primary ms-3 col-3' onClick={() => setCompleted(item.id)}>complete</button>
          <button className='btn btn-primary ms-3 col-1' onClick={() => deleteTask(item.id)}>X</button>
        </div>
      ))}
    </div>
  );

}

export default App;
