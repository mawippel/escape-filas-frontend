import React, { Component } from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	Alert,
	View
} from 'react-native';
import LoginRegisterForm from '../auxiliary/LoginRegisterForm';
import firebase from 'firebase'
import BottomInitialInfo from '../auxiliary/BottomInitialInfo';
import Logo from '../logo/Logo';


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
			.then(e => this.props.navigation.push('Map'))
			.catch(error => Alert.alert('Erro', `${error}`))
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding">
				<Logo />
				<View style={styles.form}>
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
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: "center",
	},
	form: {
		flex: 1,
		marginTop: 20,
		justifyContent: "center",
		width: "80%"
	}
});
