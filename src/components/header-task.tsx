'use client';
import { useContext, useState } from 'react';
import '../styles/header-layout.css';
import { FormContext, FormContextTypes } from '@/contexts/form-context';

const HeaderTask = () => {
  const context = useContext<FormContextTypes | null>(FormContext);

  if (!context) return;

  const { expandAddNewForm } = context;

  return (
    <>
      <section id="header">
        <div className="left-section">
          <span className="title">Today&apos;s Task</span>
          <span className="date">Wednesday, 11 May</span>
        </div>
        <button onClick={expandAddNewForm} className="btn-add">
          <i className="bx bx-plus"></i>
          <span>New Task</span>
        </button>
      </section>
    </>
  );
};

export default HeaderTask;
