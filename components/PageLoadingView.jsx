import React from "react";
import { StyleSheet, ActivityIndicator, View } from "react-native";

export default function PageLoadingView() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#aaa" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
