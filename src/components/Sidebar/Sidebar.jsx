import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from './theme/Sidebar.styl';

const paths = [
    {
        url: '/',
        title: 'Main',
    },
    {
        url: '/about/',
        title: 'About',
    }
];

export const Sidebar = props => {
    const { onClick } = props;
    return (
        <div className={css.container}>
            <nav>
                {paths.map(({ url, title }) => <li onClick={onClick} className={css.item}> <Link to={url}>{title}</Link> </li> )}
            </nav>
        </div>
    );
}

Sidebar.PropTypes = {
    onClick: PropTypes.func,
}