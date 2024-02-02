import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import './TaskInput.css';

const TaskInput = (props) => {
   const [text, setText] = useState('');

   const addTask = (event) => {
      setText(event.target.value);
   }
   const clickButton = (event) => {
      event.preventDefault();
      const taskItem = {
         id: props.items.length + 1,
         text
      }
      props.addTaskToList(taskItem);

   }
   return (
      <form onSubmit={clickButton}>
         <div className="form">
            <div className='form-control'>
               <label>Задача</label>
               <input value={text} onChange={addTask} type='text' />
            </div>
            <Button>Добавить задачу</Button>
         </div>

      </form>
   )
}

export default TaskInput;