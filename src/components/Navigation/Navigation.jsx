import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const Navigation = memo(props => {
    const { length, onClick, current } = props;

    return (
        <div onClick={onClick}>
            <button>prev</button>
            <span>
                <span>{ current }</span>
                from
                <span> { length } </span>
            </span>
            <button>next</button>
        </div>
    )
});

Navigation.PropTypes = {
    onClick: PropTypes.func,
    current: PropTypes.number,
};