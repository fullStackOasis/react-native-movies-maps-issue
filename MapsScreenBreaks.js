import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import CafeCount from './CafeCount';
import InfoButton from './InfoButton';
// https://developers.google.com/maps/documentation/urls/guide
const URL = "https://www.google.com/maps/dir/?api=1&destination=";
export default class MapsScreen extends Component {
	constructor(props) {
		super(props);
		// mock the data
		this.state = {
			nCafes : 120
		}
	}
	render() {
		const { navigation } = this.props;
		// TODO FIXME. If 'NO-LATLNG' then there will be an error.
		let latLng = navigation.getParam('latLng', 'NO-LATLNG');
		// latLng param is passed from Navigation and used to
		// set initialRegion on MapView below.
		let description = 'Zen Cafe';
		return (<View style={
			[{ flex: 1, justifyContent: 'center' },
			{
				flexDirection: 'row',
				justifyContent: 'space-around',
				padding: 10
			}]
		}>
			<MapView style={[{ flex: 1 }]}
				initialRegion={{
					latitude: latLng.latitude,
					longitude: latLng.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
			}}>
				<Marker key={name} coordinate={latLng}
					title={name} description={description}>
					<Callout alphaHitTest tooltip>
					</Callout>
				</Marker>
				<CafeCount nCafes={this.state.nCafes} />
          		<InfoButton onPress={this.props.openHelpModal} />
			</MapView>
		</View>);
	}
}
