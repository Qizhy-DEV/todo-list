'use client'
import '@/styles/all-tasks.css'
import FilterLayout from '@/components/filter-layout';
import HeaderLayout from '@/components/header-layout';
import TasksLayout from '@/components/tasks-layout';

export default function Home() {
  
  return (
    <section className='content'>
      <HeaderLayout/>
      <FilterLayout/>
      <TasksLayout/>
    </section>
  )
}
