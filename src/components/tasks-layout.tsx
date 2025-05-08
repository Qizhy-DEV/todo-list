'use client';
import '../styles/tasks-layout.css';
import Task from './task';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import React from 'react';
import { TaskInterface } from '@/interfaces/task';

interface Props {
  currentFilter: string;
  expandUpdateForm: (currentTask: TaskInterface) => void;
}

const TasksLayout = ({ currentFilter, expandUpdateForm }: Props) => {
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
        <Task expandUpdateForm={expandUpdateForm} task={task} key={task.title + index} />
      ))}
    </div>
  );
};

export default TasksLayout;
