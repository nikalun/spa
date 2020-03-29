import * as React from 'react';
import { Component, FormEvent, Fragment } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Route, Switch, Redirect, withRouter, RouteComponentProps } from "react-router-dom";

import { Index } from '../../components/Index/Index';
import { Login } from '../../components/Login/Login';

type LoginContainerProps = {
    onLoggedIn: () => void,
} & RouteComponentProps;

class RawLoginContainer extends Component<LoginContainerProps> {
    params: object;

    render() {
        return (
            <Fragment>
                <Login onSubmit={this.onSubmitHandler} onGetParams={this.onGetParamsHandler}/>
            </Fragment>
        );
    }

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

    private onGetParamsHandler = (params: object) => {
        this.params = params;
    };

    private userData = async function(url: string) {
        const { login: { current: { value } }} = this.params;

        const config: AxiosRequestConfig = {
            params: { login: value},
        };

        const data: AxiosResponse = await axios.get(url, config);

        return data;
    };

    private loggedIn = async function(url: string) {
        const { login: { current: { value: loginValue } }, password: { current: { value: passValue } } } = this.params;

        const config: AxiosRequestConfig = {
            url,
            method: 'post',
            withCredentials: true,
            data: {
                login: loginValue,
                password: passValue,
            },
        };

        const logged: AxiosResponse = await axios(config);

        return logged;
    }
}

export const LoginContainer = withRouter(RawLoginContainer);