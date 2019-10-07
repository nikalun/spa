import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Filter } from '../../components/Filter/Filter.jsx';
import { setGroup, setCurrentUser } from "../../actions";

class FilterContainer extends PureComponent {
    state = {
        active: 0,
    }

    render() {
        return <Filter {...this.props} activeFilter={this.state.active} onClick={this.onHandlerClick}/>
    }

    onHandlerClick = ({ id, filter }) => {
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