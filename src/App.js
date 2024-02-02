import React, { useState } from 'react';
import TaskInput from './components/Tasks/TaskInput/TaskInput';
import TaskList from './components/Tasks/TaskList/TaskList';
import './App.css';

let INITIAL_TODO_LIST = [
  { id: 1, text: 'чистить зубы 5' },
  { id: 2, text: 'кормить коров 25' },
  { id: 3, text: 'завтрак 5' },
]

function App() {
  const [items, setItems] = useState(INITIAL_TODO_LIST);

  const addTaskToList = (taskItem) => {
    console.log(taskItem);
    setItems((prevItems) => { return [...prevItems, taskItem] })
  }

  const deleteTaskHendler = (deleteTask) => {
    items.splice(deleteTask, 1);
    setItems((prevItems) => { return [...prevItems] });
    console.log(items)
  }

  return (
    <div className="App">
      <TaskInput addTaskToList={addTaskToList} items={items} />
      <TaskList onDeleteTask={deleteTaskHendler} items={items} />
    </div>
  );
}

export default App;
