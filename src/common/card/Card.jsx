import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card({ styles, children }) {
  return <View style={{ ...style.root, ...styles }}>{children}</View>;
}

const style = StyleSheet.create({
  root: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
