'use client';
import '../styles/filter-layout.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const FilterLayout = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  const pathname = usePathname();

  return (
    <div id="filter">
      <Link href={'/'} className="no-decoration">
        <div className="filter-item">
          <span className={`filter-item__name ${pathname === '/' && 'filter-item__name--active'}`}>
            All
          </span>
          <span
            className={`filter-item__number-of-tasks ${pathname === '/' && 'filter-item__number-of-tasks--active'}`}
          >
            {tasks.length}
          </span>
        </div>
      </Link>
      <Link href={'/completed-tasks'} className="no-decoration">
        <div className="filter-item">
          <span
            className={`filter-item__name ${pathname === '/completed-tasks' && 'filter-item__name--active'}`}
          >
            Completed
          </span>
          <span
            className={`filter-item__number-of-tasks ${pathname === '/completed-tasks' && 'filter-item__number-of-tasks--active'}`}
          >
            {tasks.filter((item) => item.isCompleted).length}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default FilterLayout;
