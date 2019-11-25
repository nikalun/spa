import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Login } from '../../components/Login/Login.jsx';


export class LoginContainer extends Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        onLoggedIn: PropTypes.func,
    };

    render() {
        return <Login onSubmit={this.onSubmitHandler} onGetParams={this.onGetParamsHandler}/>
    }

    onGetParamsHandler = params => {
        this.params = params;
    };

    onSubmitHandler = e => {
        e.preventDefault();

        this.LoggedIn('http://localhost:8888/login').then(() => {
            this.userData('http://localhost:8888/currentUser').then(result => {
                const { username, login, role } = result.data;
                localStorage.setItem('user', username);
                localStorage.setItem('login', login);
                localStorage.setItem('role', role);
                this.props.onLoggedIn();
            });
        });

    };

    userData = async function(url) {
        const { login: { current: { value } }} = this.params;
        const data = await axios.get(url, {
            params: { login: value}
        });

        return data;
    };

    LoggedIn = async function(url) {
        const { login: { current: { value: loginValue } }, password: { current: { value: passValue } } } = this.params;

        const logged = await axios({
            url,
            method: 'post',
            withCredentials: true,
            data: {
                login: loginValue,
                password: passValue,
            },
        });

        return logged;
    }
}