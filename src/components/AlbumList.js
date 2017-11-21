// @flow
import React, { Component } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {

  state = { albums: [] };


  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }) );

  }

  render() {
    if(this.state.albums.length==0){
      return (
        <View style={ style.loadingStyle }>
          <ActivityIndicator />
        </View>
      );
    }
    else
    {
      return <Text>{this.props.title}</Text>
    }

  }
}

const style={
  loadingStyle:{
    flex:5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%'
  }
}

export default AlbumList;
