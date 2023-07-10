import React from "react";
import { Text, View } from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
import { BtnMain } from "@app/components";
import { resultStyles } from "@app/screens/orderResultsChildren/Results.styles";

interface Props {
  orderNumber: number;
  retryOrder: () => Promise<void>;
  newOrder: () => void;
  dashboard: () => void;
}

export default function FailedResults({
  orderNumber,
  retryOrder,
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
            <Icon name="close-circle-outline" size={80} color="#c0392b" />
          </View>
          <Text style={resultStyles.detailsMsgFont}>
            Oops! Your order has not be submitted. Something when wrong.
          </Text>
        </View>
      </View>
      <BtnMain name="RETRY ORDER" onPress={retryOrder} />
      <BtnMain name="NEW ORDER" onPress={newOrder} />
      <BtnMain name="DASHBOARD" onPress={dashboard} />
    </View>
  );
}
