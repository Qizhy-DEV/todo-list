import { useContext } from 'react'
import '../styles/tasks-layout.css'
import Task from './task'
import { TaskContext } from '../contexts/task-context';
import { TaskInterface } from '../interfaces/task';
import { usePathname } from 'next/navigation';

const TasksLayout = () => {

    const pathname = usePathname()

    const context = useContext(TaskContext);

    if (!context) return null;

    const {tasks, setTasks} = context

    const onChangeTask = (task: TaskInterface) => {
        setTasks(prev => prev.map(item => {
            if (item.id === task.id) {
                return task
            }
            return item
        }))
    }

    const removeTask = (task: TaskInterface) => {
        setTasks(prev => prev.filter(item => item.id !== task.id))
    }

    const validateTasks = () => {
        if (pathname === '/completed-tasks') {
            return tasks.filter(item => item.isCompleted)
        } else {
            return tasks
        }
    }

    return (
        <div id="tasks">
            {validateTasks().map((task, index) => (
                <Task removeTask={removeTask} changeTask={onChangeTask} task={task} key={task.title + index}/>
            ))}
        </div>
    )
}

export default TasksLayout