import './Task.css'

const Task = (props) => {
   const liClick = () => {
      props.onDeleteTask(props.index);
   }
   return (
      <li onClick={liClick} className="task">
         {props.id} {props.text}
      </li>
   )
}

export default Task;