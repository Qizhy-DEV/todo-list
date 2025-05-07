import { ToastContext } from '@/contexts/toast-context';
import { TaskInterface } from '@/interfaces/task';
import { StatusToast, ToastContextTypes } from '@/interfaces/toast';
import { RootState } from '@/store';
import { addTask } from '@/store/tasksSlice';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

type FormValues = {
  title: string;
  subtitle: string;
};

interface Props {
  visibleAddNew: boolean;
  setVisibleAddNew: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNewForm = ({ visibleAddNew, setVisibleAddNew }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const context = useContext<ToastContextTypes | null>(ToastContext);

  if (!context) return;

  const { notify } = context;

  const onSubmit = (data: FormValues) => {
    const task: TaskInterface = {
      id: tasks.length,
      isCompleted: false,
      title: data.title,
      subtitle: data.subtitle,
    };
    dispatch(addTask(task));
    setVisibleAddNew(false);
    notify({
      title: 'Success',
      subtitle: 'Create new task successfully',
      status: StatusToast.SUCCESS,
      done: false,
      duration: 3000,
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`adding ${visibleAddNew && 'adding--displayed'}`}
    >
      <input
        {...register('title', { required: 'Task name is required' })}
        placeholder="Title"
        className="adding__txt"
      />
      {errors.title && <span className="adding__error">{errors.title.message}</span>}
      <input
        {...register('subtitle', { required: 'Task description is required' })}
        placeholder="Subtitle"
        className="adding__txt"
      />
      {errors.subtitle && <span className="adding__error">{errors.subtitle.message}</span>}
      <button type="submit" className="adding__btn-add">
        Add New Task
      </button>
    </form>
  );
};

export default AddNewForm;
