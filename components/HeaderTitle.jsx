import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function HeaderTitle({ title, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 10,
    overflow: "hidden",
  },
});
