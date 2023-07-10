import React from "react";
import { Pressable } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { useHamburgerStore } from "@app/stores";

export default function Hamburger(): JSX.Element {
  const { isHamburgerOpen, toggleHamburger } = useHamburgerStore(
    (store) => store
  );
  return isHamburgerOpen ? (
    <Pressable onPress={toggleHamburger}>
      <Icon name="close" size={24} color="#ffffff" />
    </Pressable>
  ) : (
    <Pressable onPress={toggleHamburger}>
      <Icon name="menu" size={24} color="#ffffff" />
    </Pressable>
  );
}
