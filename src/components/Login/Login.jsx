import React, { createRef } from 'react';
import PropTypes from 'prop-types';

export const Login = props => {
    const { onSubmit, onGetParams } = props;
    const login = createRef();
    const password = createRef();

    onGetParams && onGetParams({login, password});

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder={'Логин'} ref={login}/>
            <input type="password" placeholder={'Пароль'} ref={password}/>
            <button type="submit">Войти</button>
        </form>
    )
};

Login.propTypes = {
    onSubmit: PropTypes.func,
    onGetParams: PropTypes.func,
};