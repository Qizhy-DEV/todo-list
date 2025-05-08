'use client';
import '../styles/header-layout.css';

interface Props {
  expandAddNewForm: () => void;
}

const HeaderTask = ({ expandAddNewForm }: Props) => {
  return (
    <section id="header">
      <div className="left-section">
        <span className="title">Today&apos;s Task</span>
        <span className="date">Wednesday, 11 May</span>
      </div>
      <button onClick={() => expandAddNewForm()} className="btn-add">
        <i className="bx bx-plus"></i>
        <span>New Task</span>
      </button>
    </section>
  );
};

export default HeaderTask;
