import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Navigation } from '../../components/Navigation/Navigation.jsx';
import {setCurrentUser} from "../../actions";

class NavigationContainer extends PureComponent {
    state = {
        countUsers: null
    };

    render() {
        const { list, currentGroup, currentUser } = this.props;
        const { countUsers } = this.state;

        if (currentGroup === 'all') {
            this.setState({
                countUsers: list.length,
            });
        } else {
            this.setState({
                countUsers: list.filter(item => item.group === currentGroup).length,
            });
        }

        return <Navigation length={countUsers} current={currentUser} onClick={this.onHandlerClick} />
    }

    onHandlerClick = e => {
        const target = e.target;
        const { setCurrentUser, currentUser } = this.props;
        const { countUsers } = this.state;

        if (target.tagName === 'BUTTON') {
            const prev = target.innerHTML === 'prev';

            if (prev) {
                this.setState({
                   current: currentUser > 1 ? setCurrentUser(currentUser - 1) : 1,
                });
            } else {
                this.setState({
                    current: currentUser < countUsers ? setCurrentUser(currentUser + 1) : countUsers,
                });
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