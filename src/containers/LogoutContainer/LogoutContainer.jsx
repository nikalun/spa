import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Logout } from '../../components/Logout/Logout.jsx';

export class LogoutContainer extends Component {
    static propTypes = {
        onLogout: PropTypes.func,
    };

    render() {
        const user = localStorage.getItem('user');
        return <Logout onLogout={this.onLogoutHandler} user={user}/>
    }

    logoutUser = async function(url) {
        const logout = await axios({
            url,
            method: 'post',
        });

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