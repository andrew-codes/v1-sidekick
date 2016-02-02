import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import {Router, Route, Animations, Schema, Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {NavBar, NavBarModal} from './Navbar';
import Login from './Login';
import Home from './containers/Home';

class AppRouter extends React.Component {
	componentWillReceiveProps(nextProps){
		if (!nextProps.isLoggedIn){
			nextProps.actions.login();
		}
	}

    render() {
        const {
            isLoggedIn,
        } = this.props;
        return (
            <Router hideNavBar={true}>
                <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FloatFromBottom}/>
                <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
                <Schema name="withoutAnimation"/>
                <Route name="login" component={Login} hideNavBar={true} wrapRouter={true} title="Login" schema="modal"/>
                <Route name="home" component={Home} initial={true} hideNavBar={false} wrapRouter={true} title="Story Planner"/>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.getIn(['Security', 'isLoggedIn'])
});
const mapActionsToProps = dispatch => ({
    actions: Actions
});
export default connect(mapStateToProps, mapActionsToProps)(AppRouter);
