import React, { Component } from 'react';
import {
	Dimensions,
	Text,
	Image,
} from 'react-native'
import { MapView, Location, Permissions } from 'expo';

import LineReporter from '../lineReporter/LineReporter';
import LineReporterModal from '../lineReporterModal/LineReporterModal'
import Search from '../search/Search';
import { Back } from './styles'
import backImage from "../../assets/back.png";

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
		locationResult: null,
		destination: null,
		isVisible: false
	};

	componentDidMount() {
		this.getLocationAsync();
	}

	setLiveLocation = event => {
		const { latitude, longitude } = event.nativeEvent.coordinate;
		const mapRegion = { ...this.state.mapRegion }
		this.setState({
			mapRegion: {
				latitude: latitude,
				longitude: longitude,
				latitudeDelta: mapRegion.latitudeDelta,
				longitudeDelta: mapRegion.longitudeDelta
			}
		});
		if (this.state.mapRegion &&
			this.state.mapRegion.latitude &&
			this.state.mapRegion.longitude
		) {
			this.goToCurrentLocation();
		}
	};

	goToCurrentLocation = () => {
		const { mapRegion } = this.state;
		this.map.animateToRegion({
			latitude: mapRegion.latitude,
			longitude: mapRegion.longitude,
			latitudeDelta: mapRegion.latitudeDelta,
			longitudeDelta: mapRegion.longitudeDelta
		});
	}

	getLocationAsync = async () => {
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

	handleLocationSelected = (data, { geometry }) => {
		const {
			location: { lat: latitude, lng: longitude }
		} = geometry;

		console.log(data)

		this.setState({
			destination: {
				latitude,
				longitude,
				title: data.structured_formatting.main_text
			}
		});
	};

	handleBack = () => {
		this.setState({ destination: null });
	};

	handleReportLine = () => {
		this.setState( prevState => ({ isVisible: !prevState.isVisible }));
	}

	render() {
		if (this.state.locationResult === null) {
			return <Text>Procurando a sua localização...</Text>
		}
		if (this.state.hasLocationPermissions === false) {
			return <Text>Acesso a localização não permitido. Altere suas configurações.</Text>
		}
		return (
			<>
				<MapView
					style={{ flex: 1 }}
					region={this.state.mapRegion}
					ref={map => { this.map = map }}
					onUserLocationChange={this.setLiveLocation}
					showsUserLocation
					loadingEnabled
				/>
				<LineReporterModal
					isVisible={this.state.isVisible}
					handleReportLine={this.handleReportLine}
				/>
				{
					this.state.destination 
						?
						<>
							<Back onPress={this.handleBack}>
								<Image source={backImage} />
							</Back>
							<LineReporter lineReporterHandler={this.handleReportLine} />
						</> : 
							<Search onLocationSelected={this.handleLocationSelected} />
				}
			</>
		);
	}
}