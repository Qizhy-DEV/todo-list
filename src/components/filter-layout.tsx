'use client';
import '../styles/filter-layout.css';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import React from 'react';

interface Props {
    currentFilter: string;
    setCurrentFilter: React.Dispatch<React.SetStateAction<'all-tasks' | 'completed-tasks'>>;
}

const FilterLayout = ({ currentFilter, setCurrentFilter }: Props) => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    return (
        <div id="filter">
            <button onClick={() => setCurrentFilter('all-tasks')} className="filter-item">
                <span
                    className={`filter-item__name ${currentFilter === 'all-tasks' && 'filter-item__name--active'}`}
                >
                    All
                </span>
                <span
                    className={`filter-item__number-of-tasks ${currentFilter === 'all-tasks' && 'filter-item__number-of-tasks--active'}`}
                >
                    {tasks.length}
                </span>
            </button>
            <button onClick={() => setCurrentFilter('completed-tasks')} className="filter-item">
                <span
                    className={`filter-item__name ${currentFilter === 'completed-tasks' && 'filter-item__name--active'}`}
                >
                    Completed
                </span>
                <span
                    className={`filter-item__number-of-tasks ${currentFilter === 'completed-tasks' && 'filter-item__number-of-tasks--active'}`}
                >
                    {tasks.filter((item) => item.isCompleted).length}
                </span>
            </button>
        </div>
    );
};

export default FilterLayout;
