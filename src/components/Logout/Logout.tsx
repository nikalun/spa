import * as React from 'react';
import { FC, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

interface LogoutProps {
	onLogout: (event: MouseEvent) => void;
}

export const Logout: FC<LogoutProps> = props => {
	const { onLogout } = props;
	const user = localStorage.getItem('user');
	return (
		<div>
			<span>Привет, {user}. </span>
			<Link to={'/login'} onClick={onLogout}>
				Выйти
			</Link>
		</div>
	);
};
