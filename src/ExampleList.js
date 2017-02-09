import React, { Component } from 'react';

import {
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import Row from './Raw';


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#4A637D',
        flex: 1,
        padding: 10,
        marginTop: 50
    },
});

export default class ExampleList extends Component {
    render() {
        return (<View style={styles.container}>
            <ScrollView
                style={styles.scrollView}
            >
                <Row coordinates={this.props.coordinates} data={this.props.data} zIndex={100} />
            </ScrollView>

        </View>)
    }
}

