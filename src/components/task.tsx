import '../styles/task.css';
import { TaskInterface } from '../interfaces/task';
import { deleteTask, toggleTask } from '@/store/tasksSlice';
import { useDispatch } from 'react-redux';

const Task = ({ task }: { task: TaskInterface }) => {
  const dispatch = useDispatch();

  const onChangeTask = (id: number) => {
    dispatch(toggleTask(id));
  };

  const onRemoveTask = (id: number) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="task">
      <div className="task__top-area">
        <div className="task__top-area__content">
          <span
            className={`task__top-area__content__title ${task.isCompleted && 'task__top-area__content__title--completed'}`}
          >
            {task.title}
          </span>
          <span
            className={`task__top-area__content__subtitle ${task.isCompleted && 'task__top-area__content__subtitle--completed'}`}
          >
            {task.subtitle}
          </span>
        </div>
        <button
          onClick={() => onChangeTask(task.id)}
          className={`task__top-area__btn-complete ${task.isCompleted && 'task__top-area__btn-complete--done'}`}
        >
          <i className={`bx bx-check ${task.isCompleted && 'done'}`}></i>
        </button>
      </div>
      <div className="task__bottom-area">
        <div className="task__bottom-area__task__timestamp-area">
          <span className="task__bottom-area__task__timestamp-area__date">Today</span>
        </div>
        <button onClick={() => onRemoveTask(task.id)} className="task__bottom-area__btn-remove">
          <i className="bx bx-x"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
