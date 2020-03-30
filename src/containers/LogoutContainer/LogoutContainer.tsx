import * as React from 'react';
import { Component } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import { Logout } from '../../components/Logout/Logout';

type LogoutContainerProps = {
    onLogout?: () => void,
};

class RawLogoutContainer extends Component<LogoutContainerProps> {
    render() {
        return <Logout onLogout={this.onLogoutHandler}/>;
    }

    private logoutUser = async function(url: string) {
        const config: AxiosRequestConfig = {
            url,
            method: 'post',
        };

        return await axios(config);
    };

    private onLogoutHandler = () => {
        this.logoutUser('http://localhost:8888/logout').then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('login');
            localStorage.removeItem('role');
            this.props.onLogout();
        });
    }
}

export const LogoutContainer = withRouter(RawLogoutContainer);