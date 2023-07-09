import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { orderStatus, useOrdersStore } from "@app/stores";
import { MainView, TopSelectedShopLabel } from "@app/components";
import {
  ProductsSection,
  TopTabs,
  ShippingSection,
} from "@app/screens/orderReviewChildren";
import { screenNavigations } from "@app/utils";
import { StackParamsList } from "@app/types";
import Loading from "@app/screens/Loading";

export default function OrderReview(): JSX.Element {
  // variables
  const isFocused = useIsFocused();
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();
  const { order, submitOrder, resetOrder } = useOrdersStore((store) => store);
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);

  // functions
  const handleSubmit = async () => {
    try {
      setIsSubmittingOrder(true);
      await submitOrder();
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  const handleSave = () => {
    console.log("ToDo: handleSave(Draft)");
  };

  // setup
  useEffect(() => {
    if (order.status < orderStatus.review) {
      navigation.navigate(screenNavigations.dashboard.route as never);
    } else if (order.status > orderStatus.review) {
      navigation.navigate(screenNavigations.orderResults.route as never);
    }
  }, [order.status, isFocused]);

  // render
  return isSubmittingOrder ? (
    <Loading msg="Submitting Order..." />
  ) : (
    <MainView>
      <TopTabs submit={handleSubmit} save={handleSave} cancel={resetOrder} />
      <TopSelectedShopLabel shopName={order.shop?.name ?? ""} />
      <ShippingSection shipping={order.shipping} />
      <ProductsSection products={order.products} />
    </MainView>
  );
}
