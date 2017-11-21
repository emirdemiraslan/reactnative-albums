//@flow
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from "./Header";

class AlbumDetail extends Component {

    data = [];
    constructor (props) {
        super(props);
        this.data = props.data;
    }
    render() {
        return(
            <View key={this.data.i}>
                <Header title={this.data.title}/>
                <Text>{this.data.artist}</Text>

            </View>
        );
    }

}

const style={
    albumTitle:{
        fontSize:16
    },
    albumArtist:{
        fontSize:12
    }
}

export default  AlbumDetail;