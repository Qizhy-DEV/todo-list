'use client';
import React from 'react';
import '@/styles/nav-layout.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NavLayout = () => {
  const pathname = usePathname();

  return (
    <div id="navbar">
      <span className="logo">Todolist</span>
      <ul id="menu">
        <Link href={'/'}>
          <li className={`menu-item ${pathname === '/' && 'menu-item--active'}`}>All Tasks</li>
        </Link>
        <Link href={'/completed-tasks'}>
          <li className={`menu-item ${pathname === '/completed-tasks' && 'menu-item--active'}`}>
            Completed Tasks
          </li>
        </Link>
        <Link href={'/about'}>
          <li className={`menu-item ${pathname === '/about' && 'menu-item--active'}`}>About</li>
        </Link>
        <Link href={'/contact'}>
          <li className={`menu-item ${pathname === '/contact' && 'menu-item--active'}`}>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavLayout;
