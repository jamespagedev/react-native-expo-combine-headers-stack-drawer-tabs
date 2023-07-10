import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { useHamburgerStore, useViewerStore } from "@app/stores";
import ModalMainView from "@app/components/modals/ModalMainView";
import { screenNavigations } from "@app/utils";
import type { StackParamsList } from "@app/types";

export default function HamburgerList() {
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();
  const { logout } = useViewerStore((store) => store);
  const { isHamburgerOpen, toggleHamburger } = useHamburgerStore(
    (store) => store
  );
  return (
    <ModalMainView isOpen={isHamburgerOpen} toggleModal={toggleHamburger}>
      <Pressable
        style={styles.row}
        onPress={() =>
          navigation.navigate(screenNavigations.settings.route as never)
        }
      >
        <Text style={styles.font}>
          {screenNavigations.settings.screenTitle}
        </Text>
      </Pressable>
      <Pressable
        style={styles.row}
        onPress={() =>
          navigation.navigate(screenNavigations.dashboard.route as never)
        }
      >
        <Text style={styles.font}>
          {screenNavigations.dashboard.screenTitle}
        </Text>
      </Pressable>
      <Pressable
        style={styles.row}
        onPress={() =>
          navigation.navigate(screenNavigations.orderShop.route as never)
        }
      >
        <Text style={styles.font}>
          {screenNavigations.orderShop.screenTitle}
        </Text>
      </Pressable>
      <Pressable
        style={styles.row}
        onPress={() =>
          navigation.navigate(screenNavigations.browseProducts.route as never)
        }
      >
        <Text style={styles.font}>
          {screenNavigations.browseProducts.screenTitle}
        </Text>
      </Pressable>
      <Pressable style={styles.row} onPress={() => logout()}>
        <Text style={styles.font}>Logout</Text>
      </Pressable>
    </ModalMainView>
  );
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    padding: 10,
    backgroundColor: "#161b22",
    borderBottomWidth: 1,
    borderBottomColor: "#363B42",
  },
  font: {
    color: "#c9d1d9",
    fontWeight: "700",
  },
});
