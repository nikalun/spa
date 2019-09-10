import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const User = memo( props => {
    const { data: { name, description }, onClick } = props;

    return (
        <div onClick={onClick}>
            <div>
                <div>Name:</div>
                <div>{name}</div>
                <button>edit</button>
            </div>
            <div>
                <div>Description:</div>
                <div>{description}</div>
                <button>edit</button>
            </div>
        </div>
    )
});

User.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
    }),
    onClick: PropTypes.func,
};