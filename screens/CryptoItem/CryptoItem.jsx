import React from "react";
import { StyleSheet, Text, View } from "react-native";

// https://randomuser.me/api/?results=5000

export default function CryptoItem() {
  return (
    <View style={styles.container}>
      <Text>CryptoItem</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
