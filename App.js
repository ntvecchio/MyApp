import React from "react";
import { View, Text, StyleSheet, Platform, PermissionsAndroid, Dimensions} from "react-native";
import MapView from "react-native-maps";

const { width, height } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        onMapReady={() => {
          if (Platform.OS === 'android') {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
              .then((granted) => {
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  console.log('You can use the location');
                } else {
                  console.log('Location permission denied');
                }
              })
              .catch((err) => {
                console.warn(err);
              });
          }
        }}
        style={{ width, height }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});