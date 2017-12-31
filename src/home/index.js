import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeComponent from './components/homeComponent';
import './index.sass';
import {requestContent} from './actions';

class Home extends Component {

    render() {
        const {className, ...props} = this.props;
        return (
            <HomeComponent {...props}/>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        competitions: state.home.competitions,
        polls: state.home.polls
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadContent: () => {
            dispatch(requestContent());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);