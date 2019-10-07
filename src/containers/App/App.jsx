import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from "react-router-dom";
import classnames from 'classnames';

import { SidebarContainer } from '../../containers/SidebarContainer/SidebarContainer.jsx';
import { Index } from '../../components/Index/Index.jsx';
import { About } from '../../components/About/About.jsx';
import { Menu } from '../../components/Menu/Menu.jsx';

import { fetchUsersList } from "../../actions";

import css from './theme/App.styl';

class App extends Component {
    state = {
        isOpenSidebar: false,
    }

    componentDidMount() {
        this.props.fetchUsersList('./src/users.json');
    }

    render() {
        const sidebar = classnames(css.sidebar, {
            [css.sidebar_open]: this.state.isOpenSidebar,
        })
        return (
            <div className={css.container}>
                <div className={sidebar}>
                    <aside>
                        <SidebarContainer />
                    </aside>
                </div>
                <div className={css.content}>
                    <header>
                        <Menu onClick={this.onClickHandler}/>
                    </header>
                    <main>
                        <div>
                            <Switch>
                                <Route path="/" exact component={Index} />
                                <Route path="/about/"  component={About} />
                            </Switch>
                        </div>
                    </main>
                    <footer></footer>
                </div>
            </div>
        )
    }

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

export default connect(null, mapDispatchToProps)(App);