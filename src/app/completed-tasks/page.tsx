import TasksLayout from '@/components/tasks-layout';
import React from 'react';

const CompletedTasksPage = () => {
  return <TasksLayout completedFilter={true} />;
};

export default CompletedTasksPage;
