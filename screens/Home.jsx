import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { CoinList } from "../components";
import { useGeckoMarkets } from "../Hooks";

export default function Home({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { coins, isLoading } = useGeckoMarkets(currentPage);

  return (
    <View style={styles.container}>
      <CoinList
        coins={coins}
        isLoading={isLoading}
        onEndReached={() => setCurrentPage((p) => p + 1)}
        onItemPress={(item) =>
          navigation.navigate("CryptoItem", { id: item.id })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});
