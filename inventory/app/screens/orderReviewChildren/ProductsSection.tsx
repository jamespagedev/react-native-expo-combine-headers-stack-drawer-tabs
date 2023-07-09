import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Product } from "@app/screens/orderReviewChildren/productsSectionChildren";
import { OrderProduct } from "@app/types";

interface Props {
  products: Array<OrderProduct>;
}

export default function ProductsSection({ products }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Items:</Text>
      <SafeAreaView>
        <FlatList
          data={products}
          renderItem={({ item }) => <Product name={item.name} qty={item.qty} />}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: "#c9d1d9",
    fontWeight: "700",
  },
});
