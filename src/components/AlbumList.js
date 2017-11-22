// @flow
import React, { Component } from 'react';
import { Text, ScrollView, View, ActivityIndicator } from 'react-native';
import axios from 'axios';
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {

  state = { albums: [] };


  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }) );

  }

  renderAlbums() {
      return this.state.albums.map((album, i) => <AlbumDetail data={album} key={i}/> );
  }

  render() {
    if(this.state.albums.length<1){
      return (
        <View style={ style.loadingStyle }>
          <ActivityIndicator />
        </View>
      );
    }
    else
    {
      return (
          <ScrollView>
              {this.renderAlbums()}
          </ScrollView>
      );
    }

  }
}

const style={
  loadingStyle:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%'
  }
}

export default AlbumList;
