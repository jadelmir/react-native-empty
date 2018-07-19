import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { nav } from './navigationReducer';

const AppReducer = combineReducers({
	nav
});

export default AppReducer;
