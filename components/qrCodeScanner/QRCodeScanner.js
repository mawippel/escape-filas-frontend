import React, {Component} from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class QRCodeScanner extends Component {

    state = {
        hasCameraPermission: null,
        scanned: false,
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Solicitando Permissao a Camera</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>Sem acesso garantido a Camera</Text>;
        }
        return (
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && (
                    <Button title={'Escanear'} onPress={this.setState({ scanned: false })} />
                )}
            </View>
        );
    }

    handleBarCodeScanned = ({ data }) => {
        const parsedData = JSON.parse(data)
        this.props.navigation.state.params.setQRCodeData(parsedData.placeId, parsedData.name)
        this.props.navigation.navigate('Map')
    };
}