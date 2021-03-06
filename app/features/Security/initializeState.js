import Immutable from 'immutable';
import * as actions from './actions';

export default () => {
	return Immutable.fromJS({
			isAuthenticationInProgress: false,
			isLoggedIn: false,
			username: null,
			password: null
	});
};
