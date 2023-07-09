import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { fakeApiGetProducts, fakeApiGetShops } from "@app/apis";
import { MainView } from "@app/components";
import Loading from "@app/screens/Loading";
import { ProductsList, SelectShop } from "@app/screens/browseProductsChildren";
import type {
  ApiResponseGetProducts,
  ApiResponseShops,
  Shop,
} from "@app/types";
import { useSettingsStore } from "@app/stores";

export default function BrowseProducts(): JSX.Element {
  // variables
  const { settings } = useSettingsStore((store) => store);
  const [isLoadingScreen, setIsLoadingScreen] = useState(true);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [shops, setShops] = useState<ApiResponseShops>([]);
  const [products, setProducts] = useState<ApiResponseGetProducts>([]);

  // setup
  useEffect(() => {
    const initializeData = async () => {
      try {
        setIsLoadingScreen(true);
        const responseShops: ApiResponseShops = await fakeApiGetShops();
        if (responseShops.length === 0) return;
        setShops(responseShops);
        if (settings.autoSelectFirstShopOnLoad) {
          setSelectedShop(responseShops[0]);
        }
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        if (!settings.autoSelectFirstShopOnLoad) setIsLoadingScreen(false);
      }
    };
    initializeData();
  }, []);

  useEffect(() => {
    if (selectedShop === null) return;
    const initializeData = async () => {
      try {
        setIsLoadingScreen(true);
        const responseProducts: ApiResponseGetProducts =
          await fakeApiGetProducts(selectedShop.id as never);
        setProducts(responseProducts);
      } catch (error: any) {
        throw new Error(error.message);
      } finally {
        setIsLoadingScreen(false);
      }
    };
    initializeData();
  }, [selectedShop]);

  // render
  return isLoadingScreen ? (
    <Loading />
  ) : (
    <MainView>
      <View style={styles.container}>
        <SelectShop
          isNullShopSelectionAvailable={!settings.autoSelectFirstShopOnLoad}
          shops={shops}
          selectedShop={selectedShop}
          setSelectedShop={setSelectedShop}
        />
        <ProductsList shopName={selectedShop?.name ?? ""} products={products} />
      </View>
    </MainView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 20,
  },
});
