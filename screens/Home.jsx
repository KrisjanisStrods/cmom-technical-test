import React, { useState, useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { CoinList } from "../components";
import { useGeckoMarkets } from "../Hooks";

export default function Home({ navigation }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { coins, isLoading } = useGeckoMarkets(currentPage);

  const MemoizedCoinList = useMemo(() => {
    return (
      <CoinList
        coins={coins}
        isLoading={isLoading}
        onEndReached={() => setCurrentPage((p) => p + 1)}
        onItemPress={(item) =>
          navigation.navigate("CryptoItem", {
            id: item.id,
            image: item.image,
            name: item.name,
          })
        }
      />
    );
  }, [coins]);

  return <View style={styles.container}>{MemoizedCoinList}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});
