'use client';
import '../styles/tasks-layout.css';
import Task from './task';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const TasksLayout = ({ completedFilter = false }: { completedFilter?: boolean }) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const validateTasks = () => {
    if (completedFilter) {
      return tasks.filter((item) => item.isCompleted);
    } else {
      return tasks;
    }
  };

  return (
    <div id="tasks">
      {validateTasks().map((task, index) => (
        <Task task={task} key={task.title + index} />
      ))}
    </div>
  );
};

export default TasksLayout;
