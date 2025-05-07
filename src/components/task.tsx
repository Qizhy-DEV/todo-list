import '../styles/task.css';
import { TaskInterface } from '../interfaces/task';
import { deleteTask, toggleTask } from '@/store/tasksSlice';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { StatusToast, ToastContextTypes } from '@/interfaces/toast';
import { ToastContext } from '@/contexts/toast-context';
import { FormContext, FormContextTypes } from '@/contexts/form-context';

const Task = ({ task }: { task: TaskInterface }) => {
  const dispatch = useDispatch();

  const context = useContext<ToastContextTypes | null>(ToastContext);

  if (!context) return;

  const { notify } = context;

  const formContext = useContext<FormContextTypes | null>(FormContext);

  if (!formContext) return;

  const { expandUpdateForm } = formContext;

  const onChangeTask = (id: string) => {
    dispatch(toggleTask(id));
    notify({
      title: 'Success',
      subtitle: 'Update status successfully',
      status: StatusToast.SUCCESS,
      done: false,
      duration: 3000,
    });
  };

  const onRemoveTask = (id: string) => {
    dispatch(deleteTask(id));
    notify({
      title: 'Success',
      subtitle: 'Remove task successfully',
      status: StatusToast.SUCCESS,
      done: false,
      duration: 3000,
    });
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
        <div className="task__bottom-area__btn-area">
          <button
            onClick={() => expandUpdateForm(task)}
            className="task__bottom-area__btn-area__btn task__bottom-area__btn-area__btn-update"
          >
            <i className="fa-solid fa-pen"></i>
          </button>
          <button
            onClick={() => onRemoveTask(task.id)}
            className="task__bottom-area__btn-area__btn task__bottom-area__btn-area__btn-remove"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
