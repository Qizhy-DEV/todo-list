'use client';
import FilterLayout from '@/components/filter-layout';
import HeaderTask from '@/components/header-task';
import TasksLayout from '@/components/tasks-layout';
import { useState } from 'react';

export default function Home() {
  const [currentFilter, setCurrentFilter] = useState<'all-tasks' | 'completed-tasks'>('all-tasks');

  return (
    <section className="content">
      <HeaderTask />
      <FilterLayout currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
      <TasksLayout currentFilter={currentFilter} />
    </section>
  );
}
