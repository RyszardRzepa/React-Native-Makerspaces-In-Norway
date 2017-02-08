import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import AlbumDetail from './AlbumDetail';
import Makerspaces from '../Norske-Makerspaces-pr-januar-2017/I-drift.json';

class AlbumList extends Component {
    state = {makerspaces: []};

    componentWillMount() {

        this.setState({ makerspaces: Makerspaces.features });
        console.log(Makerspaces)

    }

    renderAlbums() {
        return this.state.makerspaces.map(makerspace =>
            <AlbumDetail  key={makerspace.properties.Name} makerspace={makerspace}/>
        );
    }

    render() {
        console.log(this.state);

        return (
            <ScrollView style={{paddingTop: 60}}>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
