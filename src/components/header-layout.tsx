'use client';
import { useState } from 'react';
import '../styles/header-layout.css';
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
