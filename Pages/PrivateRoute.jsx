import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <Route
            {...rest}
            render={() => {
                return isAuthenticated ? (
                    children
                ) : (
                    <Redirect to='/'></Redirect>
                );
            }}></Route>
    );
};

export default PrivateRoute;
