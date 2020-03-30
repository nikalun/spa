import * as React from 'react';
import { FC, FormEvent } from 'react';

type LoginProps = {
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const Login: FC<LoginProps> = props => {
    const { onChange, onSubmit } = props;

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder={'Логин'} name="login" onChange={onChange}/>
            <input type="password" placeholder={'Пароль'} name="password" onChange={onChange}/>
            <button type="submit">Войти</button>
        </form>
    );
};