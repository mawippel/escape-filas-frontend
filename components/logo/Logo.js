import React, { Component } from 'react';
import {
	StyleSheet,
	Image,
} from 'react-native';
import logo from '../../images/logo.png';

export default class Logo extends Component {
	render() {
		return (
			<Image source={logo}
				style={styles.logo} />
		)
	}
}

const styles = StyleSheet.create({
	logo: {
		flex: 1,
		width: "80%",
		resizeMode: "contain",
		alignSelf: "center",
		top: 5
	}
});