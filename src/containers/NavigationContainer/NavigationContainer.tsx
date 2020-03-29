import * as React from 'react';
import { PureComponent, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Navigation } from '../../components/Navigation/Navigation';
import { setCurrentUser } from "../../actions";

import { List } from './NavigationContainer.model';

type NavigationContainerProps = {
    list: List[];
    currentGroup: string;
    currentUser: number;
    setCurrentUser: (value: number) => void;
};

type NavigationContainerState = {
    countUsers: number;
};

class NavigationContainer extends PureComponent<NavigationContainerProps, NavigationContainerState> {
    state = {
        countUsers: 0,
    };

    render() {
        const { list, currentGroup, currentUser } = this.props;
        const { countUsers } = this.state;
        if (list) {
            const countUsers = currentGroup === 'all' ? list.length : list.filter(item => item.group === currentGroup).length;
            this.setState({
                countUsers,
            });
        }
        return <Navigation length={countUsers} current={currentUser} onClick={this.onHandlerClick} />
    }

    onHandlerClick = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
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