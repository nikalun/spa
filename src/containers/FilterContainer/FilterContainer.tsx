import * as React from 'react';
import {PureComponent} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Filter } from '../../components/Filter/Filter';
import { setGroup, setCurrentUser } from "../../actions";

type FilterContainerProps = {
    setGroup: (filter: string) => void;
    setCurrentUser: (id: number) => void;
}

type FilterContainerState = {
    active: number;
}

class FilterContainer extends PureComponent<FilterContainerProps, FilterContainerState> {
    state = {
        active: 0,
    };

    render() {
        return <Filter {...this.props} activeFilter={this.state.active} onClick={this.onHandlerClick}/>
    }

    onHandlerClick = (id: number, filter: string ) => {
        const { setGroup, setCurrentUser } = this.props;
        setGroup(filter);
        setCurrentUser(1);
        this.setState({
            active: id,
        });
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setGroup,
        setCurrentUser,
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(FilterContainer);