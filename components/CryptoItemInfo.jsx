import React from "react";
import { StyleSheet, Text, View, Linking } from "react-native";
import { format } from "date-fns";

export default function CryptoItemInfo({
  marketCap = "",
  genesisDate = "",
  hashAlgo = "",
  homepage = "",
}) {
  function InfoRow({
    title,
    value,
    ellipsizeMode = "tail",
    onValuePress = () => {},
    valueStyle,
  }) {
    return (
      <View style={styles.rowContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text
            numberOfLines={1}
            ellipsizeMode={ellipsizeMode}
            onPress={onValuePress}
            style={valueStyle}
          >
            {value || "-"}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <InfoRow title="Market cap:" value={marketCap} />
      <InfoRow
        title="Genesis date:"
        value={
          genesisDate ? format(new Date(genesisDate), "MMMM do, yyyy") : "-"
        }
      />
      <InfoRow title="Hash algo:" value={hashAlgo} />
      <InfoRow
        title="Homepage:"
        value={
          homepage
            .replace(/^https?:\/\//, "") // Remove https:// and http://
            .replace(/\/$/, "") // If exists, remove / from end of the string
        }
        valueStyle={{ color: "#5779c6", textDecorationLine: "underline" }}
        ellipsizeMode="middle"
        onValuePress={() => Linking.openURL(homepage)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  rowContainer: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 10,
  },
  titleContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontWeight: "bold",
  },
  valueContainer: {
    flex: 2,
  },
});
