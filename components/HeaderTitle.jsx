import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderTitle() {
  return (
    <View style={styles.container}>
      <Text>Header title</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
