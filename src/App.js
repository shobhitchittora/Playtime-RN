import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import TvShows from './components/TV Shows';
import TodoApp from './components/Todo';

class App extends React.Component {
    constructor() {
        super();
        this.state = { loggedIn: false }
        this.handleLogIn = this.handleLogIn.bind(this);
    }

    handleLogIn(loginState) {
        console.log('Callback ', loginState);
        this.setState({ loggedIn: loginState });
    }

    render() {

        const loginSection = {};
        return (

            <Router>
                <Scene key='root'>
                    <Scene key='login' hideNavBar={true} component={Login} loginCallback={this.handleLogIn} />
                    <Scene key='register' hideNavBar={false} component={Register} title='Register' />
                    <Scene key='home' component={Home} title='Home' />
                    <Scene key='tvshows' hideNavBar={true} component={TvShows} title='Tv shows' />
                    <Scene key='todoapp' hideNavBar={true} component={TodoApp} title='Todo App' />

                </Scene>

            </Router>

        )
    }
}

export default App;