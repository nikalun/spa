import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Navigation } from '../../components/Navigation/Navigation.jsx';

class NavigationContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            current: 1
        };
    }

    render() {
        const { list, currentGroup } = this.props;
        let countUsers;

        if (currentGroup === 'all') {
            countUsers = list.length;
        } else {
            countUsers = list.filter(item => item.group === currentGroup).length;
        }
        console.log(this.state.current);
        return <Navigation length={countUsers} current={this.state.current} onClick={this.onHandlerClick} />
    }

    onHandlerClick = e => {
        const target = e.target;
        const { currentGroup } = this.props;

        if (target.tagName === 'BUTTON') {
            const prev = target.innerHTML === 'prev';

            if (prev) {
                this.setState({
                   current: this.state.current > 1 ? this.state.current-- : 1,
                });
            } else {
                this.setState({
                    current: this.state.current < currentGroup.length ? this.state.current++ : currentGroup,
                });
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        list: state.users.list,
        currentGroup: state.currentGroup,
    };
};

export default connect(mapStateToProps)(NavigationContainer);