import TaskItem from './TaskItem';
import './Tasks.css'

function Tasks(props) {
    return(
        props.task_list.map((task)=> (
            <TaskItem
            key={task.id}
            id={task.id}
            desc={task.desc}
            act={(id) => props.act(id)}
            />
        ))
    )
}
export default Tasks;