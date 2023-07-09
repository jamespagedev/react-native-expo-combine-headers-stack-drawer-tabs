import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";

interface Props {
  isOpen: boolean;
  toggleModal: () => void;
  children: JSX.Element | Array<JSX.Element>;
}

export default function ModalMainView({
  isOpen,
  toggleModal,
  children,
}: Props): JSX.Element {
  return (
    <Pressable
      style={{
        ...styles.container,
        display: isOpen ? "flex" : "none",
      }}
      onPress={toggleModal}
    >
      <View style={{ top: isOpen ? 0 : -Dimensions.get("window").height }}>
        {children}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: Dimensions.get("window").height,
    backgroundColor: "rgba(22, 27, 34, 0.3)",
    zIndex: 5,
  },
});
