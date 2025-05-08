import { TaskInterface } from '@/interfaces/task';
import { StatusToast } from '@/interfaces/toast';
import { updateTask } from '@/store/tasksSlice';
import React, { useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import '@/styles/form.css';
import { handleExpandOrCollapseForm } from '@/utils/utils';
import Overlay from './overlay';
import { FormValues, taskSchema } from '@/validations/TaskSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import toastManager from '@/utils/taskManager';

interface Props {
  visible: boolean;
  onClose: () => void;
  currentTask: TaskInterface | undefined;
}

const UpdateForm = ({ visible, onClose, currentTask }: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(taskSchema),
    mode: 'onBlur',
    defaultValues: {
      title: '',
      subtitle: '',
    },
  });

  const dispatch = useDispatch();

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
      onClose();
      toastManager.notify({
        title: 'Success',
        subtitle: 'Update task successfully',
        status: StatusToast.SUCCESS,
        done: false,
        duration: 3000,
      });
      reset();
    }
  };

  return (
    <>
      <Overlay visible={visible} onClose={onClose} />
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={`form`}>
        <h3 className="form__title">Update Task</h3>
        <Controller
          name="title"
          control={control}
          render={({ field }) => <input {...field} placeholder="Title" className="form__txt" />}
        />
        {errors.title && <span className="form__error">{errors.title.message}</span>}
        <Controller
          name="subtitle"
          control={control}
          render={({ field }) => <input {...field} placeholder="Subtitle" className="form__txt" />}
        />
        {errors.subtitle && <span className="form__error">{errors.subtitle.message}</span>}
        <button type="submit" className="form__btn-update form__btn">
          Update Task
        </button>
        <button onClick={onClose} type="button" className="form__btn-close fa-solid fa-xmark" />
      </form>
    </>
  );
};

export default UpdateForm;
