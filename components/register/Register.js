import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import Logo from '../logo/Logo';
import LoginRegisterForm from '../auxiliary/LoginRegisterForm';

export default class Signup extends Component {

	signIn = () => {
		this.props.navigation.navigate('Login')
	}

	registerHandler = () => {

	}

	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<LoginRegisterForm handleAction={this.registerHandler} type="Registre-se" />
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Já possui uma conta?</Text>
					<TouchableOpacity onPress={this.signIn}>
						<Text style={styles.signupButton}> Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#455a64',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	signupTextCont: {
		flexGrow: 1,
		alignItems: 'flex-end',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row'
	},
	signupText: {
		color: 'rgba(255,255,255,0.6)',
		fontSize: 16
	},
	signupButton: {
		color: '#ffffff',
		fontSize: 16,
		fontWeight: '500'
	}
});
