import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// https://randomuser.me/api/?results=5000

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("CryptoItem")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
