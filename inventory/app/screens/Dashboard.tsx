import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { BtnMain, MainView } from "@app/components";
import { screenNavigations } from "@app/utils";
import type { StackParamsList } from "@app/types";
import { globalStyles } from "@app/styles";

export default function Dashboard(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();
  return (
    <MainView>
      <View style={styles.container}>
        <BtnMain
          name="SETTINGS"
          onPress={() =>
            navigation.navigate(screenNavigations.settings.route as never)
          }
        />
        <BtnMain
          name="CREATE NEW ORDER"
          onPress={() =>
            navigation.navigate(screenNavigations.orderShop.route as never)
          }
        />
        <BtnMain
          name="BROWSE PRODUCTS"
          onPress={() =>
            navigation.navigate(screenNavigations.browseProducts.route as never)
          }
        />
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>You have 0 draft orders</Text>
        </View>
      </View>
    </MainView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.containerAlignTopLeft,
    gap: 20,
  },
  summaryContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#e8f0fc",
    borderRadius: 5,
  },
  summaryText: {
    fontWeight: "700",
    color: "#6db51f",
  },
});
