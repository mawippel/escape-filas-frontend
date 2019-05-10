import React, { Component } from 'react';
import {
	Dimensions,
	Text,
} from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import { MapView, Location, Permissions } from 'expo';
import LineReporter from '../lineReporter/LineReporter';
import LineReporterModal from '../lineReporterModal/LineReporterModal'
import Search from '../search/Search';
import Back from '../auxiliary/Back';
import backImage from "../../assets/back.png";

const { width, height } = Dimensions.get("window")
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Map extends Component {

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
		this.props.onFetchLines();
		console.log(this.state.lines)
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
				locationResult: 'Permissão negada à Localização',
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

	handleReportLine = (quantity) => {
		// send to the backend
		

		this.setState(prevState => ({ isVisible: !prevState.isVisible }));
	}

	handleOpenCloseReportLine = () => {
		this.setState(prevState => ({ isVisible: !prevState.isVisible }));
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
					handleReportLine={(quantity) => this.handleReportLine(quantity)}
					closeLineReporterHandler={this.handleOpenCloseReportLine}
				/>
				{
					this.state.destination
						?
						<>
							<Back
								backHandler={this.handleBack}
								imageSource={backImage} />
							<LineReporter lineReporterHandler={this.handleOpenCloseReportLine} />
						</> 
						:
						<Search onLocationSelected={this.handleLocationSelected} />
				}
			</>
		);
	}
}

const mapStateToProps = state => {
    return {
		lines: state.lines,
		loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchLines: () => dispatch( actions.fetchLines() )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);