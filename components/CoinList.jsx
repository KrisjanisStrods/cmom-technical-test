import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import Logo from "./Logo";

export default function CoinList({
  coins,
  isLoading,
  onEndReached,
  onItemPress,
}) {
  function RenderItem({ item }) {
    return (
      <TouchableOpacity onPress={() => onItemPress(item)}>
        <View style={styles.itemWrapper}>
          <Image style={styles.itemImage} source={{ uri: item.image }} />
          <View>
            <View style={styles.itemTitleSectionWrapper}>
              <Text style={styles.itemTitle}>{`${
                item.name
              } (${item.symbol?.toUpperCase()})`}</Text>
              <Text style={styles.itemPrice}>{`€${item.current_price}`}</Text>
            </View>
            <Text
              style={styles.itemPastPrice}
            >{`24H HIGH: €${item.high_24h}`}</Text>
            <Text
              style={styles.itemPastPrice}
            >{`24H LOW: €${item.low_24h}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  const RenderLoader = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  return (
    <FlatList
      data={coins}
      renderItem={RenderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={Logo}
      ListFooterComponent={RenderLoader}
      onEndReached={onEndReached}
      onEndReachedThreshold={20}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
  },
  itemImage: {
    width: 70,
    height: 70,
    marginRight: 16,
    overflow: "hidden",
  },
  itemTitleSectionWrapper: {
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemPastPrice: {
    fontSize: 10,
    color: "darkgrey",
  },
});
