'use client';
import { useContext, useState } from 'react';
import '../styles/header-layout.css';
import { TaskInterface } from '../interfaces/task';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { addTask } from '@/store/tasksSlice';
import { StatusToast, ToastContextTypes } from '@/interfaces/toast';
import { ToastContext } from '@/contexts/toast-context';
import AddNewForm from './add-new-form';

const HeaderLayout = () => {
  const [visibleAddNew, setVisibleAddNew] = useState(false);

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
      <AddNewForm visibleAddNew={visibleAddNew} setVisibleAddNew={setVisibleAddNew} />
    </>
  );
};

export default HeaderLayout;
