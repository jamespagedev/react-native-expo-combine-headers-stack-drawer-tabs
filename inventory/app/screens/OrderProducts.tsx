import React, { useEffect, useRef, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { orderStatus, useOrdersStore } from "@app/stores";
import { BtnMain, MainView, TopSelectedShopLabel } from "@app/components";
import { ProductsList } from "./orderProductsChildren";
import { copyByValue, screenNavigations } from "@app/utils";
import type {
  OrderProduct,
  OrderProductNameValidationStatus,
  StackParamsList,
} from "@app/types";

const newProduct: OrderProduct = {
  id: 0,
  validationNameStatus: "empty",
  name: "",
  qty: "1",
  notes: "",
};

export default function OrderProducts(): JSX.Element {
  // variables
  const refIsNextClicked = useRef(false);
  const isFocused = useIsFocused();
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();
  const { order, setProducts } = useOrdersStore((store) => store);
  const [tempProducts, setTempProducts] = useState<Array<OrderProduct>>([
    ...order.products,
    copyByValue(newProduct),
  ]);

  // functions
  const unselectNameInput = async (
    id: number,
    text: string,
    index: number,
    status: OrderProductNameValidationStatus
  ) => {
    const updatedProducts: Array<OrderProduct> = copyByValue(tempProducts);
    updatedProducts[index].id = id;
    updatedProducts[index].name = text;
    updatedProducts[index].validationNameStatus = status;
    if (
      status === "success" &&
      updatedProducts[updatedProducts.length - 1].name.length > 0
    ) {
      updatedProducts.push(copyByValue(newProduct));
    }
    setTempProducts(updatedProducts);
  };

  const unselectQtyInput = (text: string, index: number) => {
    const updatedProducts: Array<OrderProduct> = copyByValue(tempProducts);
    updatedProducts[index].qty = text;
    setTempProducts(updatedProducts);
  };

  const removeProduct = (index: number) => {
    setTempProducts(tempProducts.filter((p, i) => i !== index));
  };

  const handleNext = () => {
    const validProducts = tempProducts.filter(
      (p) => p.validationNameStatus === "success"
    );
    if (validProducts.length === 0) return;
    refIsNextClicked.current = true;
    setProducts(validProducts);
  };

  // setup
  useEffect(() => {
    if (order.status < orderStatus.products) {
      navigation.navigate(screenNavigations.dashboard.route as never);
    }
    if (order.products.length > 0 && refIsNextClicked.current) {
      refIsNextClicked.current = false;
      navigation.navigate(screenNavigations.orderReview.route as never);
    }
  }, [order.products, isFocused]);

  // render
  return (
    <MainView>
      <TopSelectedShopLabel shopName={order.shop?.name ?? ""} />
      <ProductsList
        shopId={order.shop?.id || 1}
        products={tempProducts}
        unselectNameInput={unselectNameInput}
        unselectQtyInput={unselectQtyInput}
        removeProduct={removeProduct}
      />
      <BtnMain name="Next" onPress={handleNext} />
    </MainView>
  );
}
