import * as React from 'react';
import { Component } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import { Logout } from '../../components/Logout/Logout';

class RawLogoutContainer extends Component {
	render() {
		return <Logout onLogout={this.onLogoutHandler} />;
	}

	private logoutUser = async (url: string) => {
		const config: AxiosRequestConfig = {
			url,
			method: 'post'
		};

		return await axios(config);
	};

	private onLogoutHandler = () => {
		this.logoutUser('http://localhost:8888/logout').then(() => {
			localStorage.removeItem('user');
			localStorage.removeItem('login');
			localStorage.removeItem('role');
		});
	};
}

export const LogoutContainer = withRouter(RawLogoutContainer);
