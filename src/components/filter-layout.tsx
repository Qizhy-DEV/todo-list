import '../styles/filter-layout.css'
import { useContext } from "react";
import { TaskContext } from "../contexts/task-context";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const FilterLayout = () => {

    const pathname = usePathname()

    const context = useContext(TaskContext);
    
    if (!context) return null;

    const {tasks} = context

    return (
        <div id="filter">
            <Link href={'/'} className="no-decoration">
                <div className="filter-item">
                    <span className={`filter-item__name ${pathname === '/' && 'filter-item__name--active'}`}>All</span>
                    <span className={`filter-item__number-of-tasks ${pathname === '/' && 'filter-item__number-of-tasks--active'}`}>{tasks.length}</span>
                </div>
            </Link>
            <Link href={'/completed-tasks'} className="no-decoration">
                <div className="filter-item">
                    <span className={`filter-item__name ${pathname === '/completed-tasks' && 'filter-item__name--active'}`}>Completed</span>
                    <span className={`filter-item__number-of-tasks ${pathname === '/completed-tasks' && 'filter-item__number-of-tasks--active'}`}>{tasks.filter(item => item.isCompleted).length}</span>
                </div>
            </Link>
        </div>
    )
}

export default FilterLayout