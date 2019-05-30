import React, { Component } from 'react';
import {
	StyleSheet,
	KeyboardAvoidingView,
	Alert,
	Image,
	View,
	PixelRatio
} from 'react-native';
import LoginRegisterForm from '../auxiliary/LoginRegisterForm';
import firebase from 'firebase'
import BottomInitialInfo from '../auxiliary/BottomInitialInfo';

export default class Signup extends Component {

	static navigationOptions = {
		header: null
	};

	state = {
		email: '',
		password: ''
	}

	signIn = () => {
		this.props.navigation.goBack()
	}

	emailStateHandler = (email) => {
		this.setState({ email: email });
	}

	passwordStateHandler = (password) => {
		this.setState({ password: password });
	}

	registerHandler = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
			.then(this.props.navigation.push('Map'))
			.catch(error => Alert.alert('Erro', `${error}`))
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<Image source={require('../../images/logo.png')}
					style={{ ...styles.logo }} />
				<View style={styles.form}>
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
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
		alignItems: "center",
		justifyContent: "space-between"
	},
	logo: {
		flex: 1,
		width: "100%",
		resizeMode: "contain",
		alignSelf: "center",
		top: 5
	},
	form: {
		flex: 1,
		justifyContent: "center",
		width: "80%"
	}
});
