/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    Image

} from 'react-native';


import Card from './Card';
import CardSection from './CardSection';
import MapView from './MakerspaceMap';
import ExampleList from '../ExampleList';

const {width, height} = Dimensions.get('window');

class example extends Component {

    render() {

        const {mainImg, Name, logo, description, Kontaktperson, Utstyr, Åpningstider, kvadratmeter, epostadresse, Nettside, Facebook} = this.props.makerspaces;

        const HEADER = (
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {Name}
                </Text>
                <View style={[styles.overlay]}/>
            </View>
        );

        return (
<ExampleList />
        );
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 24,
        marginTop: 40,

    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
    },
    headerContentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
});


export default example;
