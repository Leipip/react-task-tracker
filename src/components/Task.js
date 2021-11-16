import { FaTimes } from 'react-icons/fa'

const Task = (props) => {
    return (
        <div className={`task ${(props.task.completed) ? 'reminder' : ''}`} 
        onDoubleClick={() => props.onToggle(props.task.id)} >
            <h3>My task: {props.task.title} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => props.onDelete(props.task.id)}></FaTimes></h3>
            <h3>Has it been Completed: {(props.task.completed === true) ? "true" : "false"}</h3>
             
        </div>
    )
}

export default Task
