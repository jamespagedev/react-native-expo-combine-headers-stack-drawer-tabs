import React from "react";
import { StyleSheet, View } from "react-native";
import { SwitchContainer } from "@app/screens/settingsChildren/switchesSectionChildren";

interface Props {
  autoSelectFirstShopOnLoad: boolean;
  autoDraftOrders: boolean;
  setAutoSelectFirstShopOnLoad: () => void;
  setAutoDraftOrders: () => void;
}

export default function SwitchesSection({
  autoSelectFirstShopOnLoad,
  autoDraftOrders,
  setAutoSelectFirstShopOnLoad,
  setAutoDraftOrders,
}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <SwitchContainer
        title="Auto Select First Shop On Load"
        description="After screens load with shop dropdowns, auto select the first shop in the list"
        isEnabled={autoSelectFirstShopOnLoad}
        setToggle={setAutoSelectFirstShopOnLoad}
      />
      <SwitchContainer
        title="Auto Draft Arders"
        description="During the new order process, each screen will automatically save that order on the backend until it is fully submitted"
        isEnabled={autoDraftOrders}
        setToggle={setAutoDraftOrders}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#363B42",
  },
});
