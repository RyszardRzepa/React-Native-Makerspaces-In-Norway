import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    Linking
} from 'react-native';


export default class AdditionalCardInfo extends Component {


    render() {

        const { Facebook, Nettside } = this.props.data;

        return (

            <View
                style={{
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 16,
      flexDirection: 'row',

      backgroundColor: '#f6f6f6',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: '#BDC2C9',
    }}
            >
                <View style={{ flex: 1 }}>
                    <TouchableHighlight
                        onPress={ () => console.log()}>
                        <Image

                            style={{width: 60, height: 60}}
                            source={{uri: 'https://images.seeklogo.net/2016/09/facebook-icon-preview-1.png'}}
                        />
                    </TouchableHighlight>


                </View>
                <View style={{ flex: 1 , paddingTop: 10}}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={require('../../browser.png')}
                    />
                </View>
            </View>

        )
    }
}

const styles = {
    image: {
        width: 50,
    }
};