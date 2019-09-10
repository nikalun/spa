import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { User } from '../../components/User/User.jsx';

class UsersContainers extends PureComponent {
    render() {
        const { data, currentUser, currentGroup } = this.props;
        let dataUser = [];

        if (currentGroup === 'all') {
            dataUser = data.filter(item => item.id === currentUser - 1);
        } else {
            dataUser = data
                            .filter(item => item.group === currentGroup)
                            .filter( (item, idx) => idx === currentUser - 1);
        }

        return <User data={dataUser[0]} onClick={this.onHandlerClick}/>
    }

    onHandlerClick = e => {
        const target = e.target;

        if (target.tagName === 'BUTTON') {
            const previous = target.previousSibling;
            previous.setAttribute('contenteditable', true);
        }
    }
}

const mapStateToProps = state => {
    return {
        data: state.users.list,
        currentUser: state.currentUser,
        currentGroup: state.currentGroup,
    };
};

export default connect(mapStateToProps)(UsersContainers);