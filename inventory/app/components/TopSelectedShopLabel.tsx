import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";

interface Props {
  shopName: string;
}

export default function TopSelectedShopLabel({ shopName }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="shoppingcart" size={24} color="#ffffff" />
      </View>
      <Text style={styles.title}>{shopName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#30363d",
    backgroundColor: "#0d1117",
  },
  iconContainer: {
    paddingVertical: 10,
    paddingLeft: 9,
    paddingRight: 11,
    backgroundColor: "#23c0b5",
    borderRadius: 50,
    marginRight: 10,
  },
  title: { color: "#c9d1d9", fontWeight: "700" },
});
