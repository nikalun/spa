import * as React from 'react';
import { Component } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import { Logout } from '../../components/Logout/Logout.tsx';

type LogoutContainerProps = {
    onLogout: () => void,
};

export class LogoutContainer extends Component<LogoutContainerProps> {

    render() {
        const user = localStorage.getItem('user');
        return <Logout onLogout={this.onLogoutHandler} user={user}/>
    }

    logoutUser = async function(url: string) {
        const config: AxiosRequestConfig = {
            url,
            method: 'post',
        };

        const logout: AxiosResponse = await axios(config);

        return logout;
    };

    onLogoutHandler = () => {
        this.logoutUser('http://localhost:8888/logout').then(() => {
            localStorage.removeItem('user');
            localStorage.removeItem('login');
            localStorage.removeItem('role');
            this.props.onLogout();
        });
    }
}