import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    const linkClass = ({isActive}) =>
        `px-3 py-2 rounded-md font-medium transition ${
            isActive
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
        }`;

    return (
        <header className='bg-white shadow-md'>
            <nav className='container mx-auto flex gap-4 px-4 py-3'>
                <NavLink to={'/'} className={linkClass}>
                    Home
                </NavLink>
                <NavLink to={'/news'} className={linkClass}>
                    News
                </NavLink>
                <NavLink to={'/about'} className={linkClass}>
                    About
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
