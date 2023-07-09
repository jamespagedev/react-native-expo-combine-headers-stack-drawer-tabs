import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import type { ApiResponseShops, Shop } from "@app/types";

interface Props {
  isNullShopSelectionAvailable: boolean;
  shops: ApiResponseShops;
  selectedShop: Shop | null;
  setSelectedShop: (shop: Shop) => void;
}

export default function SelectShop({
  isNullShopSelectionAvailable,
  shops,
  selectedShop,
  setSelectedShop,
}: Props): JSX.Element {
  // variables
  const [shopSelections] = useState<Array<{ value: number; label: string }>>(
    shops.map((shop) => {
      return { value: shop.id, label: shop.name };
    })
  );
  const [shopIdToShop] = useState<{ [key: string]: Shop }>(
    shops
      .map((shop) => {
        return { id: shop.id, name: shop.name, type: shop.type };
      })
      .reduce((obj, shop) => ({ ...obj, [shop.id]: shop }), {})
  );

  // functions
  const handleSelectShop = (value: string | null) => {
    if (value === null) return;
    setSelectedShop(shopIdToShop[value]);
  };

  // render
  return (
    <View>
      <Text>Select Shop:</Text>
      <View style={styles.rnPickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => handleSelectShop(value)}
          items={shopSelections}
          value={selectedShop?.id || null}
          placeholder={
            isNullShopSelectionAvailable
              ? {
                  value: null,
                  label: "Select any shop...",
                  color: "#c9d1d9",
                  backgroundColor: "#21262d",
                  borderColor: "#21262d",
                }
              : {}
          }
          style={{
            placeholder: { color: "#c9d1d9" },
            inputAndroid: {
              color: "#c9d1d9",
              backgroundColor: "#21262d",
              borderColor: "#21262d",
            },
            inputIOS: {
              color: "#c9d1d9",
              backgroundColor: "#21262d",
              borderColor: "#21262d",
            },
            inputWeb: {
              color: "#c9d1d9",
              backgroundColor: "#21262d",
              borderColor: "#21262d",
            },
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
    color: "#c9d1d9",
    fontWeight: "700",
  },
  rnPickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#96a6ad",
    borderRadius: 2,
  },
});
