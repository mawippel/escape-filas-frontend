import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity
} from 'react-native';

export default class LoginRegisterForm extends Component {

	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.inputBox}
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Email"
					placeholderTextColor="#ffffff"
					selectionColor="#fff"
					keyboardType="email-address"
					onSubmitEditing={() => this.password.focus()}
					onChangeText={(email) => this.props.emailStateHandler(email)}
				/>
				<TextInput style={styles.inputBox}
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Senha"
					secureTextEntry={true}
					placeholderTextColor="#ffffff"
					ref = {(password) => this.password = password}
					onChangeText={(password) => this.props.passwordStateHandler(password)}
				/>
				<TouchableOpacity onPress={this.props.handleAction} style={styles.button}>
					<Text style={styles.buttonText}>
						{this.props.type}
					</Text>
				</TouchableOpacity>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	inputBox: {
		width: 300,
		height: 40,
		backgroundColor: 'rgba(255, 255,255,0.2)',
		borderRadius: 25,
		paddingHorizontal: 16,
		fontSize: 16,
		color: '#ffffff',
		marginVertical: 10
	},
	button: {
		width: 300,
		backgroundColor: '#1c313a',
		borderRadius: 25,
		marginVertical: 10,
		paddingVertical: 13
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center'
	}

});