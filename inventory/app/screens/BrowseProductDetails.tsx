import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MainView, TopSelectedShopLabel } from "@app/components";

interface Props {
  route: any;
}

export default function BrowseProductDetails({ route }: Props): JSX.Element {
  const { shopName, product } = route.params;
  return (
    <MainView>
      <TopSelectedShopLabel shopName={shopName} />
      <View style={styles.container}>
        <View style={styles.productContainer}>
          <View style={styles.row}>
            <Text style={styles.fontRowLeft}>Product Number:</Text>
            <Text style={styles.fontRowRight}>{product.id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.fontRowLeft}>Name:</Text>
            <Text style={styles.fontRowRight}>{product.name}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.fontRowLeft}>In Stock:</Text>
            <Text style={styles.fontRowRight}>{product.inStock}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.fontRowLeft}>Ordered:</Text>
            <Text style={styles.fontRowRight}>{product.ordered}</Text>
          </View>
          <View>
            <Text style={styles.fontRowLeft}>Description:</Text>
            <Text style={styles.fontRowRightMultiline}>
              {product.description}
            </Text>
          </View>
        </View>
      </View>
    </MainView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  productContainer: {
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
  fontRowLeft: {
    color: "#c9d1d9",
    width: "40%",
  },
  fontRowRight: {
    color: "#c9d1d9",
  },
  fontRowRightMultiline: {
    marginTop: 10,
    flexWrap: "wrap",
    color: "#c9d1d9",
  },
});
