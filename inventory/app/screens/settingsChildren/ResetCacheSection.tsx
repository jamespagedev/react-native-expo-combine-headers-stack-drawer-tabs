import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BtnMain } from "@app/components";

interface Props {
  clearDataCache: () => Promise<void>;
}

export default function ResetCacheSection({
  clearDataCache,
}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <BtnMain name="CLEAR DATA CACHE" onPress={clearDataCache} />
      <Text style={styles.descriptionText}>
        <Text style={styles.boldText}>Caution: </Text>
        Clearing the cache will remove locally saved settings on your device.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 20,
    paddingBottom: 20,
  },
  descriptionText: {
    color: "#c9d1d9",
  },
  boldText: {
    fontWeight: "700",
  },
});
