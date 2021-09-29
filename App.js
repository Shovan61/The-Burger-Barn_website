import React from 'react';
import {
    Home,
    Menu,
    BurgerDetails,
    CartPage,
    CheckOutPage,
    PrivateRoute,
    ErrorPage,
} from './Pages';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/' render={() => <Home />}></Route>

                <Route exact path='/menu' render={() => <Menu />}></Route>

                <Route
                    exact
                    path='/menu/:id'
                    render={() => <BurgerDetails />}></Route>

                <Route exact path='/cart' render={() => <CartPage />}></Route>
                <PrivateRoute exact path='/checkout'>
                    <CheckOutPage />
                </PrivateRoute>

                <Route path='*' render={() => <ErrorPage />}></Route>
            </Switch>
        </div>
    );
}

export default App;
