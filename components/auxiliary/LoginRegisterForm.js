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
			<>
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid='#bfbfbf'
					placeholder="Email"
					placeholderTextColor="#000"
					selectionColor="#000"
					keyboardType="email-address"
					onSubmitEditing={() => this.password.focus()}
					onChangeText={(email) => this.props.emailStateHandler(email)}
				/>
				<TextInput
					style={styles.inputBox}
					underlineColorAndroid='#bfbfbf'
					placeholder="Senha"
					secureTextEntry={true}
					placeholderTextColor="#000"
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
			</>
		)
	}

}

const styles = StyleSheet.create({
	inputBox: {
		height: 40,
		borderColor: '#bfbfbf',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginBottom: 20
	},
	button: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: '#000',
		marginBottom: 12,
		paddingVertical: 12,
		borderRadius: 4,
		borderWidth: StyleSheet.hairlineWidth,
		borderColor: "rgba(255,255,255,0.7)"
	},
	buttonText: {
		fontSize: 16,
		fontWeight: '500',
		color: '#FFF',
		textAlign: 'center'
	}
});