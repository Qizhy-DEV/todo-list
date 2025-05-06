import { useContext, useState } from 'react';
import '../styles/header-layout.css';
import { TaskContext } from '../contexts/task-context';
import { TaskInterface } from '../interfaces/task';

const HeaderLayout = () => {
  const [title, setTitle] = useState('');

  const [subtitle, setSubtitle] = useState('');

  const [visibleAddNew, setVisibleAddNew] = useState(false);

  const context = useContext(TaskContext);

  if (!context) return null;

  const { tasks, setTasks } = context;

  const handleAddNewTask = () => {
    if (title === '') {
      alert('Please enter the title');
      return;
    }
    if (subtitle === '') {
      alert('Please enter the subtitle');
      return;
    }
    const task: TaskInterface = {
      id: tasks.length,
      isCompleted: false,
      title,
      subtitle,
    };
    setTasks((prev) => [task, ...prev]);
    setSubtitle('');
    setTitle('');
    setVisibleAddNew(false);
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
