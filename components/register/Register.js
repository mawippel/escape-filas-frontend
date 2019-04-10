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

export default class Signup extends Component {

	state = { 
		email: '', 
		password: ''
	}

	signIn = () => {
		this.props.navigation.navigate('Login')
	}

	emailStateHandler = (email) => {
		this.setState({email: email});
	}

	passwordStateHandler = (password) => {
		this.setState({password: password});
	}
	
	registerHandler = () => {
		firebase
		.auth()
		.createUserWithEmailAndPassword(this.state.email, this.state.password)
		.then(() => this.props.navigation.navigate('Map'))
		.catch(error => this.setState({ errorMessage: error.message }))
	}

	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<LoginRegisterForm emailStateHandler={this.emailStateHandler} 
						passwordStateHandler={this.passwordStateHandler}
						handleAction={this.registerHandler} type="Registre-se" />
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
