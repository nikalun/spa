import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components/Button/Button.jsx';

import css from './theme/User.styl';

const buttonTheme = {
    container: css.buttonContainer,
};

export const User = memo( props => {
    const { data: { name, description }, onClick } = props;

    return (
        <div onClick={onClick}>
            <div className={css.item}>
                <div className={css.title}> Name:</div>
                <div className={css.name} contentEditable={false}>{name}</div>
                <Button theme={buttonTheme}>edit</Button>
            </div>
            <div className={css.item}>
                <div className={css.title}>Description:</div>
                <div className={css.name} contentEditable={false}>{description}</div>
                <Button theme={buttonTheme}>edit</Button>
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