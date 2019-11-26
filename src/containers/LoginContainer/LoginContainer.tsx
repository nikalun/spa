import * as React from 'react';
import { Component, FormEvent } from 'react';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

import { Login } from '../../components/Login/Login.tsx';

type LoginContainerProps = {
    onLoggedIn: () => void,
};

export class LoginContainer extends Component<LoginContainerProps> {
    params: object;

    render() {
        return <Login onSubmit={this.onSubmitHandler} onGetParams={this.onGetParamsHandler}/>
    }

    onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        this.LoggedIn('http://localhost:8888/login').then(() => {
            this.userData('http://localhost:8888/currentUser').then((result: AxiosResponse) => {
                const { username, login, role } = result.data;
                localStorage.setItem('user', username);
                localStorage.setItem('login', login);
                localStorage.setItem('role', role);
                this.props.onLoggedIn();
            });
        });
    }

    onGetParamsHandler = (params: object) => {
        this.params = params;
    };

    userData = async function(url: string) {
        const { login: { current: { value } }} = this.params;

        const config: AxiosRequestConfig = {
            params: { login: value},
        }

        const data: AxiosResponse = await axios.get(url, config);

        return data;
    };

    LoggedIn = async function(url: string) {
        const { login: { current: { value: loginValue } }, password: { current: { value: passValue } } } = this.params;

        const config: AxiosRequestConfig = {
            url,
            method: 'post',
            withCredentials: true,
            data: {
                login: loginValue,
                password: passValue,
            },
        }

        const logged: AxiosResponse = await axios(config);

        return logged;
    }

}