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
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Email"
					placeholderTextColor="#ffffff"
					selectionColor="#fff"
					keyboardType="email-address"
					onSubmitEditing={() => this.password.focus()}
					onChangeText={(email) => this.props.emailStateHandler(email)}
				/>
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholder="Senha"
					secureTextEntry={true}
					placeholderTextColor="#ffffff"
					ref={(password) => this.password = password}
					onChangeText={(password) => this.props.passwordStateHandler(password)}
				/>
				<TouchableOpacity
					onPress={this.props.handleAction}
					style={styles.button}>
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
		backgroundColor: '#1a1a1a',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '30%'
	},
	inputBox: {
		width: '80%',
		height: 45,
		paddingHorizontal: '4%',
		marginVertical: '1%',
		backgroundColor: 'rgba(255, 255,255,0.2)',
		borderRadius: 25,
		fontSize: 16,
		color: '#ffffff'
	},
	button: {
		width: '80%',
		marginVertical: 10,
		paddingVertical: 13,
		backgroundColor: 'rgba(255, 255,255,0.2)',
		borderRadius: 25
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#ffffff',
		textAlign: 'center'
	}
});