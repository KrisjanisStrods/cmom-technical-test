import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Logo from "../assets/home-page-logo.png";

export default function MainPageLogo() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    padding: 30,
  },
  image: {
    width: 300,
    height: 150,
  },
});
