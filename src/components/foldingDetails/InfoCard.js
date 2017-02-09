import React from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    Button
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    leftPane: {
        flex: 1,
        backgroundColor: '#33373B',
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    rightPane: {
        flex: 2,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1
    },
    makerspaceName: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonView: {
        backgroundColor: '#ff6058'
    }
});


export default ({ onPress, data }) => (



    <View style={styles.container}>

        <View style={styles.leftPane}>
            <Text style={styles.makerspaceName}> {data.Name} </Text>

            <View style={styles.buttonView}>
                <Button
                    style={{ fontWeight: 'bold'}}
                    onPress={onPress}
                    title="Detaljer"
                    color="#fff"
                />
            </View>
        </View>

        <View style={styles.rightPane}>

            <Image source={{ uri:  data.mainImg }} style={styles.image} />
        </View>

    </View>
);