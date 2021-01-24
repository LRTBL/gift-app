import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import types from '../../types/types';

const NavBar = () => {
    const {
        user: { name },
        dispatch,
    } = React.useContext(AuthContext);

    const history = useHistory();

    const handleLogOut = () => {
        dispatch({
            type: types.LOGOUT,
        });
        history.replace('/heroes-app/login');
    };
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/heroes-app'>
                    APP-HEROES
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon' />
                </button>

                <div className='collapse navbar-collapse' id='navbarText'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink activeClassName='active' className='nav-item nav-link text-center' exact to='/heroes-app/marvel'>
                                Marvel
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink activeClassName='active' className='nav-item nav-link text-center' exact to='/heroes-app/dc'>
                                DC
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink activeClassName='active' className='nav-item nav-link text-center' exact to='/heroes-app/search'>
                                Search
                            </NavLink>
                        </li>
                    </ul>

                    <div>
                        <span className='nav-item nav-link text-center text-white'> {`Hola ${name} ! 🖖`} </span>
                    </div>
                    <button type='button' className='nav-item nav-link btn btn-secondary' onClick={handleLogOut}>
                        LogOut
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
