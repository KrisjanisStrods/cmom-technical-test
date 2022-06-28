import React, { useRef } from "react";
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
  const flatListRef = useRef(null);

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
            <View flexDirection="row">
              <View marginRight={5}>
                <Text style={styles.itemPastPrice}>24H HIGH:</Text>
                <Text style={styles.itemPastPrice}>24H LOW:</Text>
              </View>
              <View>
                <Text style={styles.itemPastPrice}>{`€${item.high_24h}`}</Text>
                <Text style={styles.itemPastPrice}>{`€${item.low_24h}`}</Text>
              </View>
            </View>
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
      ref={flatListRef}
      data={coins}
      renderItem={RenderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={Logo}
      ListFooterComponent={RenderLoader}
      onEndReached={onEndReached}
      onEndReachedThreshold={1}
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
    alignItems: "center",
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
