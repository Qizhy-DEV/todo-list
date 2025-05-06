'use client'
import '@/styles/all-tasks.css'
import FilterLayout from '@/components/filter-layout'
import HeaderLayout from '@/components/header-layout'
import TasksLayout from '@/components/tasks-layout'
import React from 'react'

const CompletedTasksPage = () => {
  
    return <section className='content'>
        <HeaderLayout/>
        <FilterLayout/>
        <TasksLayout/>
    </section>
}

export default CompletedTasksPage