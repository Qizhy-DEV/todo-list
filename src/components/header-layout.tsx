'use client';
import React from 'react';
import '@/styles/nav-layout.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    const pathname = usePathname();

    return (
        <div id="navbar">
            <span className="logo">Todolist</span>
            <ul id="menu">
                <Link href={'/'}>
                    <li className={`menu-item ${pathname === '/' && 'menu-item--active'}`}>
                        Tasks Management
                    </li>
                </Link>
                <Link href={'/about'}>
                    <li className={`menu-item ${pathname === '/about' && 'menu-item--active'}`}>
                        About
                    </li>
                </Link>
                <Link href={'/contact'}>
                    <li className={`menu-item ${pathname === '/contact' && 'menu-item--active'}`}>
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default Header;
