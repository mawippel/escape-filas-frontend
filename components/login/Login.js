import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import Logo from '../logo/Logo';
import LoginRegisterForm from '../auxiliary/LoginRegisterForm';

export default class Login extends Component {

	signUp = () => {
		this.props.navigation.navigate('Register')
	}

	loginHandler = () => {

	}

	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<LoginRegisterForm handleAction={this.loginHandler} type="Login" />
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Não possui uma conta ainda?</Text>
					<TouchableOpacity onPress={this.signUp}>
						<Text style={styles.signupButton}> Registre-se</Text>
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
