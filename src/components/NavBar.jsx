import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand'>
            Mahiler
        </Link>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <div className='navbar-nav'>
                <Link className='nav-item nav-link' to='/gif-app'>
                    Gift App
                </Link>
                <Link className='nav-item nav-link' to='/todo-list-app'>
                    Todo App
                </Link>
                <Link className='nav-item nav-link' to='/heroes-app'>
                    Heroes App
                </Link>
            </div>
        </div>
    </nav>
);

export default NavBar;
