import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import Species from "./species/Species";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={style.root}>
      <Text style={style.title}>
        <Text style={style.highlight}>The Best</Text>
        {"\n"}
        way to save{"\n"}
        endangered lives
      </Text>
      <Species />
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    // backgroundColor: "#efefef",
    backgroundColor: "#07020D",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 24,
    fontFamily: "Roboto-Regular",
  },
  highlight: {
    fontFamily: "Roboto-Bold",
  },
  image: {
    width: "100%",
  },
});
