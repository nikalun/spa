import * as React from 'react';
import { FC, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as cl from 'classnames';

import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Menu } from '../../components/Menu/Menu';
import { LogoutContainer } from '../../containers/LogoutContainer/LogoutContainer';
import { Index } from '../../components/Index/Index';
import { About } from '../../components/About/About';

import * as css from './theme/Auth.styl';

export const Auth: FC = () => {
	const [openSidebar, setOpenSidebar] = useState(false);
	const sidebar = cl(css.sidebar, {
		[css.sidebar_open]: openSidebar
	});
	return (
		<div className={css.container}>
			<div className={sidebar}>
				<aside>
					<Sidebar />
				</aside>
			</div>
			<div className={css.content}>
				<header>
					<Menu onClick={() => setOpenSidebar(!openSidebar)} />
					<LogoutContainer />
				</header>
				<main>
					<div>
						<Switch>
							<Route path='/index' component={Index} />
							<Route path='/about/' component={About} />
						</Switch>
					</div>
				</main>
				<footer />
			</div>
		</div>
	);
};
