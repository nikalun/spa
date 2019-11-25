import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import classnames from 'classnames';

import { SidebarContainer } from '../../containers/SidebarContainer/SidebarContainer.jsx';
import { Index } from '../../components/Index/Index.jsx';
import { About } from '../../components/About/About.jsx';
import { Menu } from '../../components/Menu/Menu.jsx';
import { LoginContainer } from '../../containers/LoginContainer/LoginContainer.jsx';
import { LogoutContainer } from '../../containers/LogoutContainer/LogoutContainer.jsx';

import { fetchUsersList } from "../../actions";

import css from './theme/App.styl';

class App extends Component {
    state = {
        isOpenSidebar: false,
        loggedIn: localStorage.getItem('user') ? true : false,
    };

    componentDidMount() {
        this.props.fetchUsersList('http://localhost:8888/users');
    }

    render() {
        const { loggedIn, isOpenSidebar } = this.state;
        const sidebar = classnames(css.sidebar, {
            [css.sidebar_open]: isOpenSidebar,
        });

        return (
            <div className={css.container}>
                <div className={sidebar}>
                    <aside>
                        {loggedIn && <SidebarContainer />}
                    </aside>
                </div>
                <div className={css.content}>
                    <header>
                        {loggedIn && <Menu onClick={this.onClickHandler}/>}
                        {loggedIn && <LogoutContainer onLogout={this.onLogoutHandler} />}
                    </header>
                    <main>
                        <div>
                            <Switch>
                                <Route exact path="/">
                                    {loggedIn ? <Redirect to="/index" /> : <Redirect to="/login" />}
                                </Route>
                                <Route path="/login">
                                    <LoginContainer onLoggedIn={this.onLoggedInHandler}/>
                                </Route>
                                <Route path="/index">
                                    {loggedIn && <Index />}
                                </Route>
                                <Route path="/about/">
                                    {loggedIn && <About />}
                                </Route>
                            </Switch>
                        </div>
                    </main>
                    <footer></footer>
                </div>
            </div>
        )
    }

    onLogoutHandler = () => {
        this.setState({
            loggedIn:  false,
        });
    };

    onLoggedInHandler = () => {
        const { history } = this.props;
        history.push('/index');
        this.setState({
            loggedIn: !this.state.loggedIn,
        });
    };

    onClickHandler = () => {
        this.setState({
            isOpenSidebar: !this.state.isOpenSidebar
        })
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchUsersList,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(withRouter(App));