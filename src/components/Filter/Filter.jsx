import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import css from './theme/Filter.styl';

const list = [
    {
        id: 0,
        title: 'All',
        filter: 'all',
    },
    {
        id: 1,
        title: 'First group',
        filter: 'first',
    },
    {
        id: 2,
        title: 'Second group',
        filter: 'second',
    },
    {
        id: 3,
        title: 'Third group',
        filter: 'third',
    },
];

const newProps = {};

export const Filter = memo(props => {
    const { onClick, activeFilter } = props;

    return (
        <ul className={css.list}>
            { list.map( ({ title, filter, id }) => {
                const className = classnames(css.item, {
                    [css.itemActive]: id === activeFilter
                });
                newProps.onClick = () => onClick({id, filter});
                return <li className={className} key={id} {...newProps}>{title}</li>
            })}
        </ul>
    )
});

Filter.PropTypes = {
    onClick: PropTypes.func,
    activeFilter: PropTypes.number,
};