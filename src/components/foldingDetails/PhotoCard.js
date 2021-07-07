import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    MapView,
    Text
} from 'react-native';

//import MapView from 'react-native-maps';

export default class Map extends Component {


    render() {

        return (
            <View style={styles.container}>
                <MapView
                    showsCompass={true}
                    showsPointsOfInterest={true}
                    style={styles.map}
                    showsUserLocation={true}
                    region={{
                        latitude: this.props.coordinates[1],
                        longitude: this.props.coordinates[0],
                        latitudeDelta: 0.0102,
                        longitudeDelta: 0.0101

                     }}
                />
            </View>
        )
    }
}

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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0

    }
});