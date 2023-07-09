import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Product } from "@app/screens/browseProductsChildren/productsListChildren";
import type { ApiResponseGetProducts } from "@app/types";

interface Props {
  shopName: string;
  products: ApiResponseGetProducts;
}

export default function ProductsList({
  shopName,
  products,
}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products:</Text>
      <SafeAreaView>
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <Product shopName={shopName} product={item} />
          )}
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
