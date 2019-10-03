import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Filter } from '../../components/Filter/Filter.jsx';
import { setGroup, setCurrentUser } from "../../actions";

class FilterContainer extends PureComponent {
    render() {
        return <Filter {...this.props} onClick={this.onHandlerClick}/>
    }

    onHandlerClick = e => {
        const { setGroup, setCurrentUser } = this.props;
        const target = e.target;
        const group = target.getAttribute('data-filter');

        setGroup(group);
        setCurrentUser(1);
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setGroup,
        setCurrentUser,
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(FilterContainer);