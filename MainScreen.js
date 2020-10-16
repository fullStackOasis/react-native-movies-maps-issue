import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class MainScreen extends Component {
	render() {
		const { navigation } = this.props;
		return (<View style={
			[{ justifyContent: 'center' },
			{
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'space-around',
				padding: 10
			}]
		}>
			<Button title={'Demo working Map'} style={{flex: 1}} color='blue' onPress={() => this.props.navigation.navigate('Maps')}/>
			<Button title={'Demo breaking Map'} style={{flex: 1}} color='red' onPress={() => this.props.navigation.navigate('MapsScreenBreaks')}/>
		</View>);
	}
}
