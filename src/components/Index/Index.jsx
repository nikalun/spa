import React, { Component } from 'react';

import UserContainers from '../../containers/UsersContainers/UsersContainers';
import NavigationContainer from '../../containers/NavigationContainer/NavigationContainer';
import FilterContainer from '../../containers/FilterContainer/FilterContainer';

export class Index extends Component {
	render() {
		return (
			<div>
				<FilterContainer />
				<div>
					<NavigationContainer />
				</div>
				<UserContainers />
			</div>
		);
	}
}
