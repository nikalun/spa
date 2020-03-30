import * as React from 'react';
import { Component, FormEvent } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Route, Switch, Redirect, withRouter, RouteComponentProps } from "react-router-dom";

import { Login } from '../../components/Login/Login';

type LoginContainerProps = {
    onLoggedIn: () => void,
} & RouteComponentProps;

type RawLoginContainerState = {
    login: string;
    password: string;
}

class RawLoginContainer extends Component<LoginContainerProps, RawLoginContainerState> {
    readonly state = {
        login: '',
        password: '',
    };

    render() {
        return <Login onSubmit={this.onSubmitHandler} onChange={this.onHandleChange}/>;
    }

    private onHandleChange = (event: FormEvent<HTMLInputElement>) => {
        const target = event.target as HTMLInputElement;
        const { name, value } = target;

        this.setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    private onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.loggedIn('http://localhost:8888/login').then(() => {
            this.userData('http://localhost:8888/currentUser').then((result: AxiosResponse) => {
                const { history } = this.props;
                const { username, login, role } = result.data;
                localStorage.setItem('user', username);
                localStorage.setItem('login', login);
                localStorage.setItem('role', role);
                history.push('/index');
            });
        });
    };

    private userData = async (url: string) => {
        const { login } = this.state;

        const config: AxiosRequestConfig = {
            params: { login },
        };

        return await axios.get(url, config);
    };

    private loggedIn = async (url: string) => {
        const { login, password } = this.state;

        const config: AxiosRequestConfig = {
            url,
            method: 'post',
            withCredentials: true,
            data: {
                login,
                password,
            },
        };

        return await axios(config);
    }
}

export const LoginContainer = withRouter(RawLoginContainer);