'use client';
import { useState } from 'react';
import AddNewForm from '../add-new-form';
import FilterLayout from '../filter-layout';
import HeaderTask from '../header-task';
import TasksLayout from '../tasks-layout';
import UpdateForm from '../update-form';
import { TaskInterface } from '@/interfaces/task';

const HomeLayout = () => {
    const [currentFilter, setCurrentFilter] = useState<'all-tasks' | 'completed-tasks'>(
        'all-tasks'
    );

    const [currentTask, setCurrentTask] = useState<TaskInterface>();

    const [visibleAddNewForm, setVisibleAddNewForm] = useState<boolean>(false);

    const [visibleUpdateForm, setVisibleUpdateForm] = useState<boolean>(false);

    const expandAddNewForm = () => {
        setVisibleAddNewForm(true);
    };

    const expandUpdateForm = (currentTask: TaskInterface) => {
        setVisibleUpdateForm(true);
        setCurrentTask(currentTask);
    };

    return (
        <section className="content">
            <HeaderTask expandAddNewForm={expandAddNewForm} />
            <FilterLayout currentFilter={currentFilter} setCurrentFilter={setCurrentFilter} />
            <TasksLayout expandUpdateForm={expandUpdateForm} currentFilter={currentFilter} />
            <AddNewForm visible={visibleAddNewForm} onClose={() => setVisibleAddNewForm(false)} />
            <UpdateForm
                currentTask={currentTask}
                visible={visibleUpdateForm}
                onClose={() => setVisibleUpdateForm(false)}
            />
        </section>
    );
};

export default HomeLayout;
