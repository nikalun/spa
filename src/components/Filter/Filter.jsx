import React, { memo } from 'react';
import PropTypes from 'prop-types';

import css from './Filter.styl';

const list = [
    {
        title: 'All',
        filter: 'all',
    },
    {
        title: 'First group',
        filter: 'first',
    },
    {
        title: 'Second group',
        filter: 'second',
    },
    {
        title: 'Third group',
        filter: 'third',
    },
];

export const Filter = memo(props => {
    const { onClick } = props;
    return (
        <ul className={css.list}>
            {list.map( ({ title, filter }, id) => <li className={css.item} key={id} data-filter={filter} onClick={onClick}>{title}</li>)}
        </ul>
    )
});

Filter.PropTypes = {
    onClick: PropTypes.func,
};