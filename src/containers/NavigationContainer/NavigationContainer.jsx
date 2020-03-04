import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Navigation } from '../../components/Navigation/Navigation.tsx';
import { setCurrentUser } from "../../actions";

class NavigationContainer extends PureComponent {
    countUsers = 0;

    render() {
        const { list, currentGroup, currentUser } = this.props;
        console.log(this.countUsers);
        if (list) {
            if (currentGroup === 'all') {
                this.countUsers = list.length;
            } else {
                this.countUsers = list.filter(item => item.group === currentGroup).length;
            }
        }
        return <Navigation length={this.countUsers} current={currentUser} onClick={this.onHandlerClick} />
    }

    onHandlerClick = e => {
        const target = e.target;
        const { setCurrentUser, currentUser } = this.props;
        const { countUsers } = this.state;

        if (target.tagName === 'BUTTON') {
            const prev = target.innerHTML === '&lt;';

            if (prev) {
                currentUser > 1 ? setCurrentUser(currentUser - 1) : 1;
            } else {
                currentUser < countUsers ? setCurrentUser(currentUser + 1) : countUsers;
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        list: state.users.list,
        currentGroup: state.currentGroup,
        currentUser: state.currentUser,
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setCurrentUser,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);