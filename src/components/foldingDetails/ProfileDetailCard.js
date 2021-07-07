import React from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 16,
        flexDirection: 'column',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#BDC2C9',
    },
});

export default ({ onPress, data }) => (
    <View style={styles.container}>
            <Text style={{fontWeight: 'bold'}}> Ustyr: </Text>
            <Text> {data.Utstyr}</Text>
    </View>
);

