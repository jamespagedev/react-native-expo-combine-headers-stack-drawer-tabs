import React from "react";
import { Text, View } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import { BtnMain } from "@app/components";
import { resultStyles } from "@app/screens/orderResultsChildren/Results.styles";

interface Props {
  orderNumber: number;
  newOrder: () => void;
  dashboard: () => void;
}

export default function SuccessResults({
  orderNumber,
  newOrder,
  dashboard,
}: Props): JSX.Element {
  return (
    <View style={resultStyles.container}>
      <View style={resultStyles.detailsContainer}>
        <View style={resultStyles.detailsTop}>
          <Text style={resultStyles.detailsTopFont}>
            Order No: {orderNumber}
          </Text>
        </View>
        <View style={resultStyles.detailsBody}>
          <View style={resultStyles.detailsIconContainer}>
            <Icon name="help-circle-outline" size={80} color="#ffa125" />
          </View>
          <Text style={resultStyles.detailsMsgFont}>
            Your order has not be submitted. Something unexpectect happened with
            your order.
          </Text>
        </View>
      </View>
      <BtnMain name="NEW ORDER" onPress={newOrder} />
      <BtnMain name="DASHBOARD" onPress={dashboard} />
    </View>
  );
}
