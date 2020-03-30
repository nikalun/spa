import * as React from 'react';
import { FC } from 'react';

import UserContainers from '../../containers/UsersContainers/UsersContainers';
import NavigationContainer from '../../containers/NavigationContainer/NavigationContainer';
import FilterContainer from '../../containers/FilterContainer/FilterContainer';

export const Index = () => {
	return (
		<div>
			<FilterContainer />
			<div>
				<NavigationContainer />
			</div>
			<UserContainers />
		</div>
	);
};
