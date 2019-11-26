import * as React  from 'react';
import {FunctionComponent, MouseEvent} from 'react';
import { Link } from 'react-router-dom';

interface LogoutProps {
    user: string;
    onLogout: (event: MouseEvent) => void;
}

export const Logout: FunctionComponent<LogoutProps> = props => {
    const {user, onLogout} = props;
    return (
        <div>
            <span>Привет, {user}. </span>
            <Link to={'/login'} onClick={onLogout}>Выйти</Link>
        </div>
    );
}