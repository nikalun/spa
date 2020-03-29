import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { LoginContainer } from '../../containers/LoginContainer/LoginContainer';
import { Auth } from '../../components/Auth/Auth';

import { fetchUsersList } from '../../actions';

type AppProps = {
    fetchUsersList: (url: string) => void;
};

type AppState = {
    loggedIn: boolean;
};

class App extends Component<AppProps, AppState> {
    state = {
        loggedIn: !!localStorage.getItem('user'),
    };

    componentDidMount() {
        this.props.fetchUsersList('http://localhost:8888/users');
    }

    render() {
        const { loggedIn } = this.state;

        return (
            <Switch>
                <Route exact path="/">
                    {loggedIn ? <Redirect to="/index" /> : <Redirect to="/login" />}
                </Route>
                <Route path="/login" component={LoginContainer} />
                <Route path="/*" component={Auth} />
            </Switch>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchUsersList,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(withRouter(App));