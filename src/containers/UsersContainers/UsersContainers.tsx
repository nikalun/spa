import * as React from 'react';
import { PureComponent, MouseEvent } from 'react';
import { connect } from 'react-redux';

import { User } from '../../components/User/User';

import { rootReducerType } from '../../store';
import { ListType } from '../../reducers';

type UsersContainersProps = {
	data: ListType[];
	currentUser: number;
	pending: boolean;
	currentGroup: string;
};

class UsersContainers extends PureComponent<UsersContainersProps> {
	render() {
		const {
		    data,
            currentUser,
            pending,
            currentGroup
		} = this.props;

		let dataUser = [];

		if (data.length > 0) {
			currentGroup === 'all'
				? (dataUser = data.filter(({ id }) => id === currentUser - 1))
				: (dataUser = data
						.filter(({ group }) => group === currentGroup)
						.filter((item, idx) => idx === currentUser - 1));
		}

		return (
			<User data={dataUser} pending={pending} onClick={this.onHandlerClick} />
		);
	}

	private onHandlerClick = (e: MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLButtonElement;
		const { tagName } = target;
		const isButton = tagName === 'BUTTON';

		if (isButton) {
			const previous = target.previousSibling as HTMLDivElement;
			const editable = previous.getAttribute('contenteditable');

			editable === 'true'
				? previous.setAttribute('contenteditable', 'false')
				: previous.setAttribute('contenteditable', 'true');
		}
	};
}

const mapStateToProps = ({
    users: {
        list,
        pending
    },
    currentGroup,
    currentUser,
}: rootReducerType) => ({
    data: list,
    pending,
    currentUser,
    currentGroup,
});

export default connect<UsersContainersProps>(mapStateToProps)(UsersContainers);
