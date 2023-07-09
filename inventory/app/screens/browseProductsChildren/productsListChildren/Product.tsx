import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import type { Product, StackParamsList } from "@app/types";
import { screenNavigations } from "@app/utils";

interface Props {
  shopName: string;
  product: Product;
}

export default function Product({ shopName, product }: Props): JSX.Element {
  // variables
  const { name, inStock, ordered } = product;
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();

  // render
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.font}>{name}</Text>
        <Text style={styles.font}>
          in stock: <Text style={styles.fontNumber}>{inStock}</Text>
        </Text>
      </View>
      <View>
        <Text style={styles.fontNumber}>{ordered}</Text>
        <Text style={styles.font}>Ordered</Text>
      </View>
      <Pressable
        style={styles.selectArrowContainer}
        onPress={() =>
          navigation.navigate(
            screenNavigations.browseProductDetails.route as any,
            { shopName, product }
          )
        }
      >
        <Icon
          style={styles.selectArrow}
          name="keyboard-arrow-right"
          size={24}
          color="#e39a22"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#161b22",
    borderRadius: 5,
  },
  left: {
    width: "40%",
  },
  font: {
    color: "#c9d1d9",
  },
  fontNumber: {
    color: "#c9d1d9",
  },
  selectArrowContainer: {
    margin: 0,
    padding: 0,
  },
  selectArrow: {
    alignSelf: "center",
    paddingVertical: 20,
  },
});
