import React, { Component } from 'react';
import {
	Dimensions,
	Text
} from 'react-native'
import { MapView, Location, Permissions } from 'expo';

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
		this.setState({ mapRegion: mapRegion });
	};

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				locationResult: 'Permissão negada a Localização',
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
			return <Text>Procurando a sua localização...</Text>
		}
		if (this.state.hasLocationPermissions === false) {
			return <Text>Acesso a localização não permitido. Altere suas configurações.</Text>
		}
		return (
			<MapView
				style={{ flex: 1 }}
				region={this.state.mapRegion}
				showsUserLocation
				loadingEnabled
				//onRegionChange={this._handleMapRegionChange}
				>
			</MapView>
		);
	}
}
