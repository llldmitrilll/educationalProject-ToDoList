import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from './TaskInput.module.css';

const TaskInput = (props) => {
   const [text, setText] = useState('');
   const [isInputValid, setIsInputValid] = useState(true);

   const addTask = (event) => {
      if (text.length > 0) setIsInputValid(true);
      setText(event.target.value);
   }
   const clickButton = (event) => {
      event.preventDefault();
      if (text.length === 0) {
         setIsInputValid(false);
         return;
      }
      const taskItem = {
         id: props.items.length + 1,
         text
      }
      props.addTaskToList(taskItem);
      setText('');
   }
   return (
      <form onSubmit={clickButton}>
         <div className="form">
            <div className={`${styles['form-control']} ${!isInputValid && styles.invaled}`}>
               <label>Задача</label>
               <input
                  value={text} onChange={addTask}
                  type='text'
               />
            </div>
            <Button type='submit'>Добавить задачу</Button>
         </div>

      </form>
   )
}

export default TaskInput;