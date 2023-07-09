import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  name: string;
  qty: string;
}

export default function Product({ name, qty }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.font}>{name}</Text>
      </View>
      <View>
        <Text style={styles.font}>qty: {qty}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#161b22",
    borderRadius: 5,
  },
  left: {
    width: "80%",
  },
  font: {
    color: "#c9d1d9",
  },
});
