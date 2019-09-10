import React, { Component, Fragment } from 'react';
import { Route, Switch } from "react-router-dom";

import { Sidebar } from '../../components/Sidebar/Sidebar.jsx';
import { Index } from '../../components/Index/Index.jsx';
import { About } from '../../components/About/About.jsx';
import { Menu } from '../../components/Menu/Menu.jsx';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <header>
                   <Menu />
                </header>
               <main>
                   <aside>
                       <Sidebar />
                   </aside>
                   <div>
                        <Switch>
                            <Route path="/" exact component={Index} />
                            <Route path="/about/"  component={About} />
                        </Switch>
                   </div>
               </main>
                <footer></footer>
            </Fragment>
        )
    }
}