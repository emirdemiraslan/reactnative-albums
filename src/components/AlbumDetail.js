//@flow
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from "./CardSection";
import Button from './Button';


const AlbumDetail = ({ data }) => {

    const { title, artist, thumbnail_image, image, url} = data;
    const {
        thumbnailContainerStyle,
        thumbnailStyle,
        textContainer,
        headerTextStyle,
        albumCover
    } = styles;


        return(
            <Card >
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image style={thumbnailStyle} source={{uri : thumbnail_image}}/>

                    </View>

                    <View style={textContainer}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={albumCover} source={{ uri: image }}/>
                </CardSection>

                <CardSection>
                    <Button onPress={() => Linking.openURL(url)}>
                        Buy Now
                    </Button>

                </CardSection>
            </Card>
        );


}

const styles = {
    textContainer: {
        flexDirection:'column',
        justifyContent: 'space-around'
    },
    headerTextStyle:{
        fontSize:18
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    albumCover: {
        width: '100%',
        height: 300
    }


}


export default  AlbumDetail;