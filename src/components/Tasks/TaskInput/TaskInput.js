import Button from "../../UI/Button/Button";
import './TaskInput.css';

const TaskInput = () => {
   return (
      <form>
         <div className='form-control'>
            <label>Задача</label>
            <input type='text' />
         </div>
         <Button>Добавить задачу</Button>
      </form>
   )
}

export default TaskInput;