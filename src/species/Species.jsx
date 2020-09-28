import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import Card from "../common/card/Card";

const windowWidth = Dimensions.get("window").width;
const data = [
  {
    title: "Polar Bear",
    location: "Arctic Ocean",
    backgroundColor: "#3BA99C",
    imageSrc: require("../../assets/images/polar-bear.png"),
  },
  {
    title: "African Gray",
    location: "Western Kenya",
    backgroundColor: "#640D14",
    imageSrc: require("../../assets/images/african-gray.png"),
  },
];

export default function Species() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Carousel
      data={data}
      renderItem={({
        item: { title, location, imageSrc, backgroundColor },
      }) => {
        return (
          <Card styles={{ backgroundColor }}>
            <Image resizeMode="contain" style={style.image} source={imageSrc} />
            <View style={style.legend}>
              <Text style={style.title}>{title}</Text>
              <Text style={style.location}>{location}</Text>
            </View>
          </Card>
        );
      }}
      itemWidth={windowWidth - 80}
      sliderWidth={windowWidth - 40}
    />
  );
}

const style = StyleSheet.create({
  image: {
    width: "100%",
  },
  legend: {
    position: "absolute",
    left: 24,
    bottom: 24,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    fontFamily: "Roboto-Medium",
  },
  location: {
    fontSize: 22,
    color: "#fff",
    fontFamily: "Roboto-Regular",
  },
});
