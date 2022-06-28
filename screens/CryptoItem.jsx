import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CryptoItem({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Text>This is some text</Text>,
    });
  }, []);

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
