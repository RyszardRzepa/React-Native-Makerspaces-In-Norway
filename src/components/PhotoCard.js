import React from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

import MapView from 'react-native-maps';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#33373B',
        padding: 10,
        flexDirection: 'column',
    },
    card: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-end',
    },
});

export default ({ onPress }) => (
    <View style={styles.container}>
        <MapView
            showsUserLocation={true}
            initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,

    }}
        />

    </View>
);