import React, {Component} from 'react';
import {Router,Stack, Scene} from "react-native-router-flux";

import Login from './pages/Login';
import SignUp from './pages/SignUp';

class Routes extends Component {
    render() {
        return (
            <Router>
            <Stack key="root">
                <Scene key="login" component={Login} title="Login" />
                <Scene key="register" component={SignUp} title="SignUp" />
            </Stack>
            </Router>
        );
    }
}

export default Routes;
