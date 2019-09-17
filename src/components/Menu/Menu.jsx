import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../components/Button/Button.jsx';

export const Menu = memo(props => {
    const { onClick } = props;
    return  <Button onClick={onClick}>Menu</Button>
});

Menu.PropTypes = {
    onClick: PropTypes.func,
}