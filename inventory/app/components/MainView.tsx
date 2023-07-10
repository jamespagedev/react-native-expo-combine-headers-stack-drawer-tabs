import React from "react";
import { StyleSheet, View } from "react-native";
import HamburgerList from "./modals/HamburgerList";

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

export default function MainView({ children }: Props): JSX.Element {
  return (
    <View style={styles.main}>
      <HamburgerList />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    position: "relative",
    width: "100%",
    backgroundColor: "#0d1117",
  },
});
