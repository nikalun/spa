import * as React from 'react';
import { FunctionComponent, createRef, FormEvent } from 'react';

type LoginProps = {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    onGetParams: (params: object) => void;
};

export const Login: FunctionComponent<LoginProps> = props => {
    const { onSubmit, onGetParams } = props;
    const login = createRef<HTMLInputElement>();
    const password = createRef<HTMLInputElement>();

    onGetParams && onGetParams({login, password});

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder={'Логин'} ref={login}/>
            <input type="password" placeholder={'Пароль'} ref={password}/>
            <button type="submit">Войти</button>
        </form>
    );
};