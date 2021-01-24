import React from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../auth/AuthContext';
import types from '../../types/types';

const LoginScreen = ({ history }) => {
    const { dispatch } = React.useContext(AuthContext);

    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/heroes-app';
        dispatch({ type: types.LOGIN, payload: { name: 'Fernando' } });
        history.replace(lastPath);
    };
    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />
            <button className='btn btn-primary' type='submit' onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

LoginScreen.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired,
    }).isRequired,
};

export default LoginScreen;
