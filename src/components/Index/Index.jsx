import React, { Component } from 'react';

import UserContainers from '../../containers/UsersContainers/UsersContainers.jsx';
import NavigationContainer from '../../containers/NavigationContainer/NavigationContainer.jsx';
import FilterContainer from '../../containers/FilterContainer/FilterContainer.jsx';

export class Index extends Component {
    render() {
        return(
            <div>
                <FilterContainer />
                <div>
                    <NavigationContainer />
                </div>
                <UserContainers />
            </div>
        )
    }
}