import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import classnames from 'classnames';

import { Sidebar } from '../../components/Sidebar/Sidebar.jsx';
import { Index } from '../../components/Index/Index.jsx';
import { About } from '../../components/About/About.jsx';
import { Menu } from '../../components/Menu/Menu.jsx';

import css from './App.styl';

export class App extends Component {
    state = {
        isOpenSidebar: false,
    }

    render() {
        const sidebar = classnames(css.sidebar, {
            [css.sidebar_open]: this.state.isOpenSidebar,
        })
        return (
            <div className={css.container}>
                <div className={sidebar}>
                    <aside>
                        <Sidebar />
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