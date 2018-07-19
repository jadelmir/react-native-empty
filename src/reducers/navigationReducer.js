import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigators/AppNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialNavState = RootNavigator.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
	let nextState;
	switch (action.type) {
		case 'Login':
			nextState = RootNavigator.router.getStateForAction(NavigationActions.back(), state);
			break;
		case 'Logout':
			nextState = RootNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Login' }), state);
			break;
		default:
			nextState = RootNavigator.router.getStateForAction(action, state);
			break;
	}

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};
