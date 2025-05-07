import { ToastContext } from '@/contexts/toast-context';
import { TaskInterface } from '@/interfaces/task';
import { StatusToast, ToastContextTypes } from '@/interfaces/toast';
import { RootState } from '@/store';
import { addTask, updateTask } from '@/store/tasksSlice';
import React, { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import '@/styles/form.css';
import { handleExpandOrCollapseForm } from '@/app/utils/utils';

type FormValues = {
  title: string;
  subtitle: string;
};

interface Props {
  visible: boolean;
  collapse: () => void;
  currentTask: TaskInterface | undefined;
}

const UpdateForm = ({ visible, collapse, currentTask }: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

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
    if (currentTask) {
      const { id, isCompleted } = currentTask;
      const task: TaskInterface = {
        id,
        isCompleted,
        title: data.title,
        subtitle: data.subtitle,
      };
      dispatch(updateTask(task));
      collapse();
      notify({
        title: 'Success',
        subtitle: 'Create new task successfully',
        status: StatusToast.SUCCESS,
        done: false,
        duration: 3000,
      });
      reset();
    }
  };

  useEffect(() => {
    if (formRef.current) {
      handleExpandOrCollapseForm({
        formRef,
        collapseHeight: '250px',
        collapseWidth: '500px',
        expandHeight: '270px',
        expandWidth: '520px',
        visible,
        displayType: 'flex',
      });
    }
  }, [visible]);

  useEffect(() => {
    if (currentTask) {
      reset({
        title: currentTask.title,
        subtitle: currentTask.subtitle,
      });
    }
  }, [currentTask]);

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={`form`}>
      <h3 className="form__title">Update Task</h3>
      <input
        {...register('title', { required: 'Task name is required' })}
        placeholder="Title"
        className="form__txt"
      />
      {errors.title && <span className="form__error">{errors.title.message}</span>}
      <input
        {...register('subtitle', { required: 'Task description is required' })}
        placeholder="Subtitle"
        className="form__txt"
      />
      {errors.subtitle && <span className="form__error">{errors.subtitle.message}</span>}
      <button type="submit" className="form__btn-update form__btn">
        Update Task
      </button>
      <button
        onClick={() => collapse()}
        type="button"
        className="form__btn-close fa-solid fa-xmark"
      />
    </form>
  );
};

export default UpdateForm;
