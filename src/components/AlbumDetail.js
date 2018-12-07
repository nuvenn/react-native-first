import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

class AlbumDetail extends Component {
    render() {
        const { title, thumbnail_image, image, artist } = this.props.album;
        const { thumbnailStyle, headerContentStyle, leftHeaderStyle, headerTextStyle, imageStyle } = styles;
        return (
            <Card>
                <CardSection>
                    <View style={leftHeaderStyle}>
                        <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{title}</Text>
                        <Text>{artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={imageStyle} source={{ uri: image }} />
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18    
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    leftHeaderStyle: {
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;

