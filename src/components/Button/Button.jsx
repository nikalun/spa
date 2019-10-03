import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import css from './theme/Button.styl';

export const Button = props => {
    const { children, onClick, disabled, theme } = props;
    const classNames = classnames(css.container, {
       [theme.container]: theme && theme.container,
    });
    return <button className={classNames} disabled={disabled} onClick={onClick}>{children}</button>
};
Button.defaultProps = {
    theme: {},
};

Button.PropTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    theme: PropTypes.shape({
       container: PropTypes.string,
    }),
};