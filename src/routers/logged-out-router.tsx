import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Signup } from '../pages/Signup';
import { Login } from '../pages/Login';

export function LoggedOutRouter() {
    return (
        <Router>
            <Switch>
                <Route path='/signup'>
                    <Signup/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
            </Switch>
        </Router>
    )
}

