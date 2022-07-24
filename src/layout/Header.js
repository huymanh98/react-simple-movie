import React, { Fragment } from 'react';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Fragment>
            <header className='header flex items-center justify-center gap-x-5 text-white py-10 mb-10'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-700' : ''}>Home</NavLink>
                <NavLink to="/movies" className={({ isActive }) => isActive ? 'text-red-700' : ''}>Movie</NavLink>
            </header>
        </Fragment>
    );
};

export default Header;