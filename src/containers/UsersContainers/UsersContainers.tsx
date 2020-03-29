import * as React from 'react';
import { PureComponent, Fragment, MouseEvent } from 'react';
import { connect } from 'react-redux';

import { User } from '../../components/User/User';

import { List } from './UserContainers.model';

type UsersContainersprops = {
    data: List[];
    currentUser: number;
    pending: boolean;
    currentGroup: string;
}

class UsersContainers extends PureComponent<UsersContainersprops> {
    render() {
        const { data, currentUser, pending, currentGroup } = this.props;
        let dataUser = [];

        if (data.length > 0) {
            if (currentGroup === 'all') {
                dataUser = data.filter(({ id }) => id === currentUser - 1);
            } else {
                dataUser = data
                    .filter(({ group }) => group === currentGroup)
                    .filter( (item, idx) => idx === currentUser - 1);
            }
        }

        return (
            <Fragment>
                <User data={dataUser} pending={pending} onClick={this.onHandlerClick}/>
            </Fragment>
        )
    }

    onHandlerClick = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLButtonElement;
        const { tagName } = target;

        if (tagName === 'BUTTON') {
            const previous = target.previousSibling as HTMLDivElement;
            const editable = previous.getAttribute('contenteditable');

            editable === 'true' ? previous.setAttribute('contenteditable', 'false') : previous.setAttribute('contenteditable', 'true');
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