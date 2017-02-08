// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import AlbumList from './src/components/AlbumList';
import MakerspacesDetails from './src/components/MakerspacesDetails';


const App = () => (
  <View style={{ flex: 1 }}>
      <Router>
          <Scene key="root">
              <Scene key="makerspaces" navigationBarStyle={{backgroundColor:'#314152'}} titleStyle={{color:'white'}} component={AlbumList} title="Makerspaces" initial={true} />
              <Scene key="details" navigationBarStyle={{backgroundColor:'#314152'}} titleStyle={{color:'white'}} component={MakerspacesDetails} title="Details" />
          </Scene>
      </Router>
  </View>
);

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};


// Render it to the device
AppRegistry.registerComponent('makerspace', () => App);
