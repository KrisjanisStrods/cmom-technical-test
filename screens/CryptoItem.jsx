import React, { useEffect } from "react";
import { StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import RenderHTML from "react-native-render-html";
import { HeaderTitle, CryptoItemInfo, PageLoadingView } from "../components";
import { useGeckoCoin } from "../Hooks";

export default function CryptoItem({ route, navigation }) {
  const { id, image, name } = route.params;
  const { coin, isLoading } = useGeckoCoin(id);
  const { width } = useWindowDimensions();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderTitle title={name} image={image} />,
      headerTitleAlign: "center",
    });
  }, []);

  if (isLoading) {
    return <PageLoadingView />;
  }

  return (
    <ScrollView style={styles.container}>
      <CryptoItemInfo
        marketCap={coin.marketCap}
        genesisDate={coin.genesisDate}
        hashAlgo={coin.hashingAlgorithm}
        homepage={coin.homepage}
      />
      <RenderHTML
        contentWidth={width}
        source={{
          html: coin.description,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
});
