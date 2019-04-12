import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Alert
} from 'react-native';
import Logo from '../logo/Logo';
import LoginRegisterForm from '../auxiliary/LoginRegisterForm';
import firebase from 'firebase'
import BottomInitialInfo from '../auxiliary/BottomInitialInfo';

export default class Login extends Component {

	state = {
		email: '',
		password: ''
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
			.catch(error => Alert.alert('Erro', `${error}`))
	}

	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<LoginRegisterForm
					emailStateHandler={this.emailStateHandler}
					passwordStateHandler={this.passwordStateHandler}
					handleAction={this.loginHandler}
					type="Login"
				/>
				<BottomInitialInfo 
					firstText='Não possui uma conta ainda?'
					secondText=' Registre-se'
					buttonCallback={this.signUp}
				/>
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
	}
});
