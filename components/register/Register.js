import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert
} from 'react-native';
import Logo from '../logo/Logo';
import LoginRegisterForm from '../auxiliary/LoginRegisterForm';
import firebase from 'firebase'
import BottomInitialInfo from '../auxiliary/BottomInitialInfo';

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
		.catch(error => Alert.alert('Erro', `${error}`))
	}

	render() {
		return (
			<View style={styles.container}>
				<Logo />
				<LoginRegisterForm 
						emailStateHandler={this.emailStateHandler} 
						passwordStateHandler={this.passwordStateHandler}
						handleAction={this.registerHandler} 
						type="Registre-se" />
				<BottomInitialInfo 
					firstText='Já possui uma conta?'
					secondText=' Login'
					buttonCallback={this.signIn}
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
