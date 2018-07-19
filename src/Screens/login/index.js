import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class login extends Component {
	render() {
		return (
			<View>
				<Text> HELLO </Text>
			</View>
		);
	}
}
const mapStateToProps = ({}) => {
	return {};
};
export default connect(
	mapStateToProps,
	{}
)(login);
