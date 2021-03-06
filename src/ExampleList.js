import React from 'react';

import {
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';

import Row from './Raw';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: '#4A637D',
        flex: 1,
        padding: 10,
        paddingTop: STATUSBAR_HEIGHT,
        marginTop: 50
    },
});

export default () => (
    <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
        />
        <ScrollView
            style={styles.scrollView}
        >
            <Row zIndex={70} />
        </ScrollView>
    </View>
);
