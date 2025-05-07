'use client';
import { useContext, useState } from 'react';
import '../styles/header-layout.css';
import { TaskInterface } from '../interfaces/task';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addTask } from '@/store/tasksSlice';
import { StatusToast, ToastContextInterface } from '@/interfaces/toast';
import { ToastContext } from '@/contexts/toast-context';

const HeaderLayout = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const [title, setTitle] = useState('');

  const [subtitle, setSubtitle] = useState('');

  const [visibleAddNew, setVisibleAddNew] = useState(false);

  const context = useContext<ToastContextInterface | null>(ToastContext);

  if (!context) return;

  const { notify } = context;

  const handleAddNewTask = () => {
    if (title === '') {
      notify({
        title: 'Warning',
        subtitle: 'Please enter the title',
        status: StatusToast.WARNING,
        done: false,
      });
      return;
    }
    if (subtitle === '') {
      notify({
        title: 'Warning',
        subtitle: 'Please enter the subtitle',
        status: StatusToast.WARNING,
        done: false,
      });
      return;
    }
    const task: TaskInterface = {
      id: tasks.length,
      isCompleted: false,
      title,
      subtitle,
    };
    dispatch(addTask(task));
    setSubtitle('');
    setTitle('');
    setVisibleAddNew(false);
    notify({
      title: 'Success',
      subtitle: 'Create new task successfully',
      status: StatusToast.SUCCESS,
      done: false,
    });
  };

  return (
    <>
      <section id="header">
        <div className="left-section">
          <span className="title">Today&apos;s Task</span>
          <span className="date">Wednesday, 11 May</span>
        </div>
        <button onClick={() => setVisibleAddNew((prev) => !prev)} className="btn-add">
          <i className="bx bx-plus"></i>
          <span>New Task</span>
        </button>
      </section>
      <section className={`adding ${visibleAddNew && 'adding--displayed'}`}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="adding__txt"
        />
        <input
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          placeholder="Subtitle"
          className="adding__txt"
        />
        <button onClick={handleAddNewTask} className="adding__btn-add">
          Add New Task
        </button>
      </section>
    </>
  );
};

export default HeaderLayout;
