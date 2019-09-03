import React, { Component } from 'react';

import { Filter } from '../Filter/Filter.jsx';
import { User } from '../User/User.jsx';
import { Navigation } from '../Navigation/Navigation.jsx';

export class Index extends Component {
    render() {
        return(
            <div>
                <Filter />
                <div>
                    <Navigation />
                </div>
                <User />
            </div>
        )
    }
}