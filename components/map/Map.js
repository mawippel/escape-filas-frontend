import React, { Component } from 'react';
import {
	Dimensions,
	ActivityIndicator,
	Alert,
} from 'react-native'
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import firebase from 'firebase';
import MapView from 'react-native-maps';

import * as actions from '../../store/actions/index';
import LineReporter from '../lineReporter/LineReporter';
import LineReporterModal from '../lineReporterModal/LineReporterModal'
import Search from '../search/Search';
import Back from '../auxiliary/Back';
import ButtonSeeLines from '../auxiliary/ButtonSeeLines';
import backImage from "../../assets/back.png";
import { CenteredView } from '../styles';
import ButtonQRCode from '../auxiliary/QRCodeButton';
import DisabledInput from '../auxiliary/DisabledInput';


const { width, height } = Dimensions.get("window")
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Map extends Component {

	static navigationOptions = {
		header: null,
		headerBackTitle: 'Voltar'
	};

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
		isVisible: false,
		currentUser: -1,
	};

	componentDidMount() {
		this.getLocationAsync();

		const user = firebase.auth().currentUser;
		const uid = user.uid;
		this.setState({ currentUser: uid });
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

		this.props.onReportLocation(this.state.currentUser, mapRegion.latitude, mapRegion.longitude)
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

		this.setState({
			destination: {
				latitude,
				longitude,
				placeID: data.id,
				placeName: data.structured_formatting.main_text
			}
		});
	};

	setQRCodeData = (placeID, placeName) => {
		this.setState({
			destination: {
				placeID: placeID,
				placeName: placeName
			}
		});
	}

	onPressQRCode = () => {
		this.props.navigation.navigate('QRCodeScanner', { setQRCodeData: (placeID, placeName) => this.setQRCodeData(placeID, placeName) })
	}

	handleBack = () => {
		this.setState({ destination: null });
	};

	navigateToLines = () => {
		this.props.navigation.push('Lines', {lat: this.state.mapRegion.latitude, lng: this.state.mapRegion.longitude})
	}

	handleReportLine = (quantity) => {
		const line = { ...this.state.destination }
		this.props.onReportLine(line.placeID, line.placeName, quantity)
		this.setState(prevState => ({ isVisible: !prevState.isVisible }));
	}

	handleOpenCloseReportLine = () => {
		this.setState(prevState => ({ isVisible: !prevState.isVisible }));
	}

	render() {
		if (this.state.locationResult === null) {
			return (
				<CenteredView>
					<ActivityIndicator size="large" color="#000" />
				</CenteredView>
			)
		}
		if (this.state.hasLocationPermissions === false) {
			Alert.alert('Erro', 'Acesso a localização não permitido. Altere suas configurações')
			this.props.navigation.navigate('Login')
			return null
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
							{!this.state.destination.latitude
								? <DisabledInput inputValue={this.state.destination.placeName} /> 
								: null}
							<Back
								backHandler={this.handleBack}
								imageSource={backImage} />
							<LineReporter lineReporterHandler={this.handleOpenCloseReportLine} />
						</>
						:
						<>
							<Search onLocationSelected={this.handleLocationSelected} />
							<ButtonSeeLines	backHandler={this.navigateToLines} />
							<ButtonQRCode onPress={this.onPressQRCode} />
						</>
				}
			</>
		);
	}
}


const mapDispatchToProps = dispatch => {
	return {
		onReportLine: (placeID, placeName, quantity) => dispatch(actions.reportLine(placeID, placeName, quantity)),
		onReportLocation: (uuid, lat, lgn) => dispatch(actions.reportLocation(uuid, lat, lgn))
	};
};

export default connect(null, mapDispatchToProps)(Map);