import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const User = props => {
    return (
        <div>
            <div>
                <div>Name:</div>
                <div>*name*</div>
                <button>edit</button>
            </div>
            <div>
                <div>Description:</div>
                <div>*description*</div>
                <button>edit</button>
            </div>
        </div>
    )
};

User.propTypes = {
    data: PropTypes.object
};