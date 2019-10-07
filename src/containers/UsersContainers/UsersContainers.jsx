import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { User } from '../../components/User/User.jsx';

class UsersContainers extends PureComponent {
    render() {
        const { data, currentUser, pending, currentGroup } = this.props;
        let dataUser = [{}];

        if (data.length > 0) {
            if (currentGroup === 'all') {
                dataUser = data.filter(item => item.id === currentUser - 1);
            } else {
                dataUser = data
                    .filter(item => item.group === currentGroup)
                    .filter( (item, idx) => idx === currentUser - 1);
            }
        }
        return (
            <Fragment>
                <User data={dataUser[0]} pending={pending} onClick={this.onHandlerClick}/>
            </Fragment>
        )
    }

    onHandlerClick = e => {
        const target = e.target;

        if (target.tagName === 'BUTTON') {
            const previous = target.previousSibling;
            const editable = previous.getAttribute('contenteditable');

            editable === 'true' ? previous.setAttribute('contenteditable', false) : previous.setAttribute('contenteditable', true);
        }
    }
}

const mapStateToProps = state => {
    return {
        data: state.users.list,
        pending: state.users.pending,
        currentUser: state.currentUser,
        currentGroup: state.currentGroup,
    };
};

export default connect(mapStateToProps)(UsersContainers);