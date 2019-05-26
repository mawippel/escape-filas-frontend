import React, { Component } from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	Alert
} from 'react-native';
import Logo from '../logo/Logo';
import LoginRegisterForm from '../auxiliary/LoginRegisterForm';
import firebase from 'firebase'
import BottomInitialInfo from '../auxiliary/BottomInitialInfo';

export default class Login extends Component {

	static navigationOptions = {
    header: null
  };

	state = {
		email: '',
		password: ''
	}

	signUp = () => {
		this.props.navigation.push('Register')
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
			.then(this.props.navigation.push('Map'))
			.catch(error => Alert.alert('Erro', `${error}`))
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
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
			</KeyboardAvoidingView>
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
