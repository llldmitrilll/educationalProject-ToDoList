import React from 'react';
import './TaskList.css';
import Task from '../Task/Task';

const TaskList = (props) => {
   const deleteTaskHandler = (deleteTask) => {
      props.onDeleteTask(deleteTask);

   }
   return (
      <div>
         <h1>Список задач</h1>
         <ul className='task-list'>
            {props.items.map((item, index) =>
               <Task
                  key={index}
                  id={item.id}
                  text={item.text}
                  index={index}
                  onDeleteTask={deleteTaskHandler}
               />
            )}
         </ul>
      </div>

   )
}

export default TaskList;