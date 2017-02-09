import React, {
    Component,
} from 'react';

import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

import FoldView from 'react-native-foldview';

import ProfileDetailCard from './ProfileDetailCard';
import AdditionalInfoCard from './AdditionalCardInfo';

import {
    ThinGrayLine,
    ThickDarkGrayLine,
} from './Lines';

export default class Row extends Component {


    componentWillMount() {
        this.renderBackface = this.renderBackface.bind(this);
        this.renderInnerBackFace = this.renderInnerBackFace.bind(this);
    }

    // renders closing card sceen
    renderBlankFace() {
        return (
            <View
                style={{
                  backgroundColor: '#ff6058',
                  flex: 1,
                }}
            />
        );
    }

    renderBackface() {
        const onPress = this.props.onPress;
        return (
            <View style={{ flex: 1 }}>

                <FoldView
                    renderFrontface={this.renderBlankFace}
                    renderBackface={this.renderInnerBackFace}
                >
                    <AdditionalInfoCard data={this.props.data} onPress={onPress}/>
                </FoldView>

            </View>
        );
    }

    renderInnerBackFace() {
        const onPress = this.props.onPress;
        return (
            <View
                style={{
              backgroundColor: '#f6f6f6',
              flex: 1,
              borderTopWidth: StyleSheet.hairlineWidth,
              borderTopColor: '#BDC2C9',
              borderBottomLeftRadius: 2,
              borderBottomRightRadius: 2,
        }}
            >
                <View
                    style={{
                    backgroundColor: '#ff6058',
                    flex: 1,
                    margin: 14,
                    borderRadius: 2,
                  }}
                >
                    <TouchableHighlight
                        style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
                        onPress={onPress}
                    >
                        <Text>
                            Lukke
                        </Text>
                    </TouchableHighlight>

                </View>
            </View>
        );
    }

    render() {
        const {description, Kontaktperson, Utstyr, Åpningstider, medlemmer, Nettside, Facebook} = this.props.data;
        const onPress = this.props.onPress;

        return (
            <View
                style={{
                  flex: 1,
                  backgroundColor: '#f6f6f6',
                  flexDirection: 'column',
                }}
            >
                <View style={{ flex: 1 }}>

                    <View
                        style={{
                          flex: 1,
                          paddingBottom: 10,
                          padding: 10,
                        }}
                    >
                        <Text>{description}</Text>

                        <View>
                           <Text style={{fontWeight: 'bold'}}> Kontaktperson:</Text>
                            <Text>{Kontaktperson}</Text>
                        </View>

                     </View>

                </View>

                    <View style={{ flex: 1 }}>

                        <FoldView
                            renderFrontface={this.renderBlankFace}
                            renderBackface={this.renderBackface}
                        >
                            <ProfileDetailCard data={this.props.data} onPress={onPress}/>
                        </FoldView>

                    </View>

                </View>

        );
    }
}