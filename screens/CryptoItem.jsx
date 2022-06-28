import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderTitle } from "../components";

export default function CryptoItem({ route, navigation }) {
  const { id, image, name } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderTitle title={name} image={image} />,
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
