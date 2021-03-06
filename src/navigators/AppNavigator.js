import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { RootNavigator } from './Router';
const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
	state: state.nav
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
