import React from 'react';
import AuthContext from './auth/AuthContext';
import AppRouter from './routers/AppRouter';
import authReducer from './auth/authReducer';

const init = () => JSON.parse(localStorage.getItem('user')) || { logged: false };

const HeroesApp = () => {
    const [user, dispatch] = React.useReducer(authReducer, {}, init);

    React.useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />;
        </AuthContext.Provider>
    );
};

export default HeroesApp;
