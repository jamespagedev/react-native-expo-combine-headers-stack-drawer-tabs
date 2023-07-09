import { BtnMain } from "@app/components";
import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  acceptSettings: () => void;
}

export default function AcceptSection({ acceptSettings }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <BtnMain name="ACCEPT" onPress={acceptSettings} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#363B42",
  },
});
