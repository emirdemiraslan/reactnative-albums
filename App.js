/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Text, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


const App = () => {
    return (
      <View>
        <Header title={'Albums'} />
        <AlbumList title={'Album List'} />
      </View>
    );
};



export default App;
