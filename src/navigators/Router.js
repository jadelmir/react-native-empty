import { createStackNavigator } from 'react-navigation';

import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import LoginScreen from 'screens/login/';
export const RootNavigator = createStackNavigator({
	Login: { screen: LoginScreen },
	Main: { screen: MainScreen },
	Profile: { screen: ProfileScreen }
});
