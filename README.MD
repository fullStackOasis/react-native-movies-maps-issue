# Demo of React Native Map breaking

The React Native `react-native-maps` project has stricter handling in Android than in iOS. [The documentation specifies](https://github.com/react-native-maps/react-native-maps#children-components-not-re-rendering):

> Components that aren't declared by this library (Ex: Markers, Polyline) must not be children of the MapView component due to MapView's unique rendering methodology. Have your custom components / views outside the MapView component and position absolute to ensure they only re-render as needed. Example: Bad:

```
  <View style={StyleSheet.absoluteFillObject}>
    <MapView style={StyleSheet.absoluteFillObject}>
      <View style={{ position: 'absolute', top: 100, left: 50 }}/>
    </MapView>
  </View>
```
> Good:
```
  <View style={StyleSheet.absoluteFillObject}>
    <MapView style={StyleSheet.absoluteFillObject} />
    <View style={{ position: 'absolute', top: 100, left: 50 }}/>
  </View>
```

This code sample shows where things can go wrong, and how to fix them. There's a screen where the map breaks because of errant child components in the `MapView`, and a screen where the map handles the child components correctly.

## Instructions

To run the demo:

```
nvm use 10.20.1
npm install
```

You will need a [Google Maps key](https://developers.google.com/maps/api-key-best-practices) that's installed in the `android` area of your React Native project.

Make sure your Android device is set up for USB debugging. In a terminal, navigate to the project root (where `App.js` resides). From the command line, run:
```
npx react-native run-android
```
While that loads, in another terminal window, run the Metro Server:
```
npx react-native start
```

[You can see the behavior in this YouTube video](https://youtu.be/3B6to3qN4HU). I've got a blog post that explains the [error messages you might see when your React Native MapView has this issue.](https://www.fullstackoasis.com/articles/2020/10/20/index4-count5-addinarray-addviewinner-error-react-native-maps/)

![demo react native maps crash in Android](https://github.com/fullStackOasis/react-native-movies-maps-issue/raw/master/react-native-maps-invalid-child-components-1.gif)