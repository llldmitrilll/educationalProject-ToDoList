import React from 'react';
import TaskInput from './components/Tasks/TaskInput/TaskInput';
import TaskList from './components/Tasks/TaskList/TaskList'

function App() {
  return (
    <div className="App">
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
