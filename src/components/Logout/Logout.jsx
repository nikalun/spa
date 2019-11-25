import React  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Logout = props => {
   const { user, onLogout } = props;
   return (
       <div>
          <span>Привет, { user }. </span>
          <Link to={'/login'} onClick={onLogout}>Выйти</Link>
       </div>
   );
};

Logout.propTypes = {
    user: PropTypes.string,
    onLogout: PropTypes.func,
};