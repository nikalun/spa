import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <li>
                        <Link to={'/'}>Main</Link>
                    </li>
                    <li>
                        <Link to={'/about/'}>About</Link>
                    </li>
                </nav>
            </div>
        );
    }
}