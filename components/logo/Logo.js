import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Image,
	PixelRatio
} from 'react-native';

export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image style={{ 
					width: PixelRatio.getPixelSizeForLayoutSize(110), 
					height: PixelRatio.getPixelSizeForLayoutSize(95) }}
					source={require('../../images/logo.png')}
					resizeMode='contain' />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: '10%',
		paddingBottom: '10%'
	},
	logoText: {
		marginVertical: 15,
		fontSize: 18,
		color: 'rgba(255, 255, 255, 0.7)'
	}
});