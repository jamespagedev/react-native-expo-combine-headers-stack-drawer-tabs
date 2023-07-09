import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { OrderShipping } from "@app/types";

interface Props {
  shipping: OrderShipping;
}

export default function ShippingSection({ shipping }: Props): JSX.Element {
  const { from, to, address, notes } = shipping;
  return (
    <View style={styles.container}>
      <Text style={styles.containerTitle}>
        Please review the following items before submitting the order:
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.row}>
          <Text style={styles.fontRowLeft}>From:</Text>
          <Text style={styles.fontRowRight}>{from}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fontRowLeft}>To:</Text>
          <Text style={styles.fontRowRight}>{to}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fontRowLeft}>Ship To Address:</Text>
          <Text style={styles.fontRowRight}>{address}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.fontRowLeft}>Notes:</Text>
          <Text style={styles.fontRowRight}>{notes}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
  },
  containerTitle: {
    color: "#c9d1d9",
    fontWeight: "700",
  },
  detailsContainer: {
    padding: 10,
    backgroundColor: "#161b22",
    borderWidth: 0.5,
    borderColor: "#363B42",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#363B42",
  },
  lastRow: {
    flexDirection: "row",
    paddingBottom: 10,
  },
  fontRowRight: {
    color: "#c9d1d9",
  },
  fontRowLeft: {
    color: "#c9d1d9",
    width: "50%",
  },
});
