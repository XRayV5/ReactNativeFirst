import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

export default function AlbumDetail(props) {
  const {
    thumbnailContainerStyle,
    thumbnailStyle,
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: props.thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{props.title}</Text>
          <Text>{props.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{ uri: props.image }} />
      </CardSection>
      <CardSection>
        <Button
          onPress={() => {
            Linking.openURL(props.url);
          }}
        >
          <Text>Buy Now</Text>
        </Button>
      </CardSection>
    </Card>
  );
}

const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
