import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { orderStatus, useOrdersStore } from "@app/stores";
import { MainView, TopSelectedShopLabel } from "@app/components";
import {
  SuccessResults,
  FailedResults,
  UnknownResults,
} from "@app/screens/orderResultsChildren";
import Loading from "@app/screens/Loading";
import { screenNavigations } from "@app/utils";
import { StackParamsList } from "@app/types";

export default function OrderResults(): JSX.Element {
  // variables
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();
  const refIsNewOrderSelected = useRef(false);
  const { order, resetOrder, submitOrder } = useOrdersStore((store) => store);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);

  // functions
  const handleNewOrder = () => {
    refIsNewOrderSelected.current = true;
    resetOrder();
  };

  const handleRetryOrder = async () => {
    try {
      setIsSubmittingOrder(true);
      await submitOrder();
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  useEffect(() => {
    if (order.status === orderStatus.shop && refIsNewOrderSelected.current) {
      refIsNewOrderSelected.current = false;
      navigation.navigate(screenNavigations.orderShop.route as never);
    } else if (order.status === orderStatus.shop) {
      navigation.navigate(screenNavigations.dashboard.route as never);
    }
  }, [order.status]);

  // render
  return isSubmittingOrder ? (
    <Loading msg="Retrying Submit Order..." />
  ) : (
    <MainView>
      <TopSelectedShopLabel shopName={order.shop?.name ?? ""} />
      {order.status === orderStatus.submitSuccess ? (
        <SuccessResults
          orderNumber={216514}
          newOrder={handleNewOrder}
          dashboard={resetOrder}
        />
      ) : order.status === orderStatus.submitSuccess ? (
        <FailedResults
          orderNumber={216514}
          retryOrder={handleRetryOrder}
          newOrder={handleNewOrder}
          dashboard={resetOrder}
        />
      ) : (
        <UnknownResults
          orderNumber={216514}
          newOrder={handleNewOrder}
          dashboard={resetOrder}
        />
      )}
    </MainView>
  );
}
