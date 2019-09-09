import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { User } from '../../components/User/User.jsx';

class UsersContainers extends PureComponent {
    render() {
        const { data } = this.props;
        return <User data={data} />
    }
}

const mapStateToProps = state => {
    return {
        data: state.users,
    };
}

export default connect(mapStateToProps)(UsersContainers);