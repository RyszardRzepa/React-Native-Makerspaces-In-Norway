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
import {Actions} from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';
import ExampleList from '../ExampleList';

const {width, height} = Dimensions.get('window');

class example extends Component {

    render() {
        return (
            <ExampleList coordinates={this.props.coordinates} data={this.props.makerspaceDetail}/>
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
