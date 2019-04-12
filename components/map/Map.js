import React, { Component } from 'react';
import {
	Dimensions,
	View,
	StyleSheet,
	Text
} from 'react-native'
import { Constants, MapView, Location, Permissions } from 'expo';

const { width, height } = Dimensions.get("window")
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class Map extends Component {

	state = {
		mapRegion: {
			latitude: 0,
			longitude: 0,
			latitudeDelta: 0,
			longitudeDelta: 0
		},
		hasLocationPermissions: false,
		locationResult: null
	};

	componentDidMount() {
		this._getLocationAsync();
	}

	_handleMapRegionChange = mapRegion => {
		this.setState({ mapRegion });
	};

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				locationResult: 'Permissao negada a Localizaçao',
			});
		} else {
			this.setState({ hasLocationPermissions: true });
		}

		let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
		this.setState({ locationResult: JSON.stringify(location) });

		this.setState({
			mapRegion: {
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}
		});
	};

	render() {
		if (this.state.locationResult === null) {
			return <Text>Finding your current location...</Text>
		}
		if (this.state.hasLocationPermissions === false) {
			return <Text>Location permissions are not granted.</Text>
		}
		return (
			<MapView
				style={{ flex: 1 }}
				region={this.state.mapRegion}
				onRegionChange={this._handleMapRegionChange}>
				<MapView.Marker
					coordinate={this.state.mapRegion}>
					<View style={styles.radius}>
						<View style={styles.marker} />
					</View>
				</MapView.Marker>
			</MapView>
		);
	}
}

const styles = StyleSheet.create({
	radius: {
		height: 50,
		width: 50,
		borderRadius: 50 / 2,
		overflow: 'hidden',
		backgroundColor: 'rgba(0, 122, 255, 0.1)',
		borderWidth: 1,
		borderColor: 'rgba(0, 122, 255, 0.3)',
		alignItems: 'center',
		justifyContent: 'center'
	},
	marker: {
		height: 20,
		width: 20,
		borderWidth: 3,
		borderColor: 'white',
		borderRadius: 20 / 2,
		overflow: 'hidden',
		backgroundColor: '#007AFF'
	}
})
