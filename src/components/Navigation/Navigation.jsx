import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components/Button/Button.jsx';

import css from './theme/Navigation.styl';

const buttonTheme = {
    container: css.buttonContainer,
};

export const Navigation = memo(props => {
    const { length, onClick, current } = props;

    return (
        <div className={css.container} onClick={onClick}>
            <Button theme={buttonTheme}>{`<`}</Button>
            <span>
                <span>{ current } </span>
                from
                <span> { length } </span>
            </span>
            <Button theme={buttonTheme}>{`>`}</Button>
        </div>
    )
});

Navigation.propTypes = {
    onClick: PropTypes.func,
    current: PropTypes.number,
    length: PropTypes.number,
};