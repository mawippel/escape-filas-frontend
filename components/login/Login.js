import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';
import Logo from '../logo/Logo';
import LoginRegisterForm from '../auxiliary/LoginRegisterForm';
import firebase from 'firebase'

export default class Login extends Component {

	state = {
		email: '',
		password: '',
		errorMessage: null
	}

	signUp = () => {
		this.props.navigation.navigate('Register')
	}

	emailStateHandler = (email) => {
		this.setState({ email: email });
	}

	passwordStateHandler = (password) => {
		this.setState({ password: password });
	}

	loginHandler = () => {
		const { email, password } = this.state
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => this.props.navigation.navigate('Map'))
			.catch(error => this.setState({ errorMessage: error.message }))
	}

	render() {
		if (this.state.errorMessage) {
			return (
				<View style={styles.container}>
					<Text>Erro do chapa {this.state.errorMessage}</Text>
				</View>
			)
		}

		return (
			<View style={styles.container}>
				<Logo />
				<LoginRegisterForm emailStateHandler={this.emailStateHandler}
					passwordStateHandler={this.passwordStateHandler}
					handleAction={this.loginHandler} type="Login" />
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
		backgroundColor: '#ffffff',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	signupTextCont: {
		flex: 1,
		backgroundColor: '#1a1a1a',
		justifyContent: 'center',
		paddingVertical: 16,
		flexDirection: 'row',
		width: '100%'
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
