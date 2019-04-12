import React, { Component } from 'react';
import {
	Dimensions,
	View,
	StyleSheet
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
		initialPosition: {
			latitude: 0,
			longitude: 0,
			latitudeDelta: 0,
			longitudeDelta: 0
		},
		markerPosition: {
			latitude: 0,
			longitude: 0
		}
	}

	watchID = null

	_getLocationAsync = async () => {
		await Permissions.askAsync(Permissions.LOCATION);
		return position = await Location.getCurrentPositionAsync();
	}

	componentDidMount() {
		alert(JSON.stringify(this._getLocationAsync()));
		navigator.geolocation.getCurrentPosition((position) => {
			alert('initialRegion')
			let initialRegion = {
				latitude: parseFloat(position.coords.latitude),
				longitude: parseFloat(position.coords.longitude),
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}

			this.setState({ initialPosition: initialRegion })
			this.setState({ markerPosition: initialRegion })
		})

		this.watchID = navigator.geolocation.watchPosition((position) => {
			let latitude = parseFloat(position.coords.latitude)
			let longitude = parseFloat(position.coords.longitude)

			let lastRegion = {
				latitude: latitude,
				longitude: longitude,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}
			this.setState({ initialPosition: lastRegion })
			this.setState({ markerPosition: lastRegion })
		})
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchID)
	}

	render() {
		return (
			<MapView
				style={{ flex: 1 }}
				region={this.state.initialPosition}>
				<MapView.Marker
					coordinate={this.state.markerPosition}>
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
