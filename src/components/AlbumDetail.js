import React, {Component} from 'react';
import {Text, View, Image, Linking, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {

    onRowPress() {
        Actions.details({
            makerspaceDetail: this.props.makerspace.properties,
            coordinates: this.props.makerspace.geometry.coordinates
        });
    }

    render() {
        const {Name, description, mainImg, logo} = this.props.makerspace.properties;
        const {
            thumbnailStyle,
            headerContentStyle,
            thumbnailContainerStyle,
            headerTextStyle,
            imageStyle
        } = styles;


        return (
            <TouchableOpacity onPress={this.onRowPress.bind(this)} >
                <Card>
                    <CardSection>
                        <View style={thumbnailContainerStyle}>
                            <Image
                                style={thumbnailStyle}
                                source={{ uri: logo }}

                            />
                        </View>
                        <View style={headerContentStyle}>
                            <Text style={headerTextStyle}>{Name}</Text>
                            <Text numberOfLines={2}>{description}</Text>
                        </View>
                    </CardSection>

                    <CardSection>
                        <Image
                            style={imageStyle}
                            source={{ uri: mainImg }}
                        />
                    </CardSection>
                </Card>
            </TouchableOpacity>
        );
    };
}


const styles = {
    headerContentStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 60,
        width: 60
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 200,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
