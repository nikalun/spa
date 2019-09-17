import React, { memo } from 'react';
import PropTypes from 'prop-types';

export const Button = memo(props => {
    const { children, onClick, disabled } = props;
    return <button disabled={disabled} onClick={onClick}>{children}</button>
});

Button.PropTypes = {
    onClick: PropTypes.func,
    chiildren: PropTypes.node,
    disabled: PropTypes.bool,
}