import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MapsScreen from './MapsScreen';
import MapsScreenBreaks from './MapsScreenBreaks';
import MainScreen from './MainScreen';

const MainNavigator = createStackNavigator({
	MainScreen: { screen: MainScreen },
	Maps: { screen: MapsScreen, navigationOptions: {
		headerTitle: 'Cafe Map Works!',
	  }, params : { latLng : { latitude: 40.730610, longitude: -73.935242 }  } },
	MapsScreenBreaks: { screen: MapsScreenBreaks, navigationOptions: {
		headerTitle: 'Cafe Map Fails!',
	  }, params : { latLng : { latitude: 40.730610, longitude: -73.935242 }  }  }
});

const App = createAppContainer(MainNavigator);

export default App;