import * as React from 'react';
import { PureComponent, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Navigation } from '../../components/Navigation/Navigation';
import { setCurrentUser } from '../../actions';

import { List } from './NavigationContainer.model';
import { rootReducerType } from '../../store';

type NavigationContainerProps = {
	list: List[];
	currentGroup: string;
	currentUser: number;
	setCurrentUser: (value: number) => void;
};

type NavigationContainerState = {
	countUsers: number;
};

class NavigationContainer extends PureComponent<
	NavigationContainerProps,
	NavigationContainerState
> {
	readonly state = {
		countUsers: 0
	};

	render() {
		const { list, currentGroup, currentUser } = this.props;
		const { countUsers } = this.state;
		if (list) {
			const countUsers =
				currentGroup === 'all'
					? list.length
					: list.filter(({ group }) => group === currentGroup).length;
			this.setState({
				countUsers
			});
		}
		return (
			<Navigation
				length={countUsers}
				current={currentUser}
				onClick={this.onHandlerClick}
			/>
		);
	}

	private onHandlerClick = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLDivElement;
		const { setCurrentUser, currentUser } = this.props;
		const isButton = target.tagName === 'BUTTON';

		if (isButton) {
			const prev = target.innerHTML === '&lt;';
			prev ? setCurrentUser(currentUser - 1) : setCurrentUser(currentUser + 1);
		}
	};
}

const mapStateToProps = ({
    users: {
        list,
    },
    currentGroup,
    currentUser,
}: rootReducerType) => ({
    list,
    currentGroup,
    currentUser,
});

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			setCurrentUser
		},
		dispatch
	);
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NavigationContainer);
