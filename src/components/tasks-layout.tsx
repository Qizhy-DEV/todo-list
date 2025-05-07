'use client';
import '../styles/tasks-layout.css';
import Task from './task';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface Props {
  currentFilter: string;
}

const TasksLayout = ({ currentFilter }: Props) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const validateTasks = () => {
    if (currentFilter === 'completed-tasks') {
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
