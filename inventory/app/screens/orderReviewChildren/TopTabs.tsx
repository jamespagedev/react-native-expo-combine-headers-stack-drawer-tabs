import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign as Icon, Entypo } from "@expo/vector-icons";

interface Props {
  submit: () => Promise<void>;
  save: () => void;
  cancel: () => void;
}

export default function TopTabs({ submit, save, cancel }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable style={styles.firstTab} onPress={submit}>
        <Icon
          style={styles.icon}
          name="checkcircle"
          size={24}
          color="#c9d1d9"
        />
        <Text style={styles.font}>Submit</Text>
      </Pressable>
      <Pressable style={styles.notFirstTab} onPress={save}>
        <Entypo style={styles.icon} name="save" size={24} color="#c9d1d9" />
        <Text style={styles.font}>Save</Text>
      </Pressable>
      <Pressable style={styles.notFirstTab} onPress={cancel}>
        <Icon style={styles.icon} name="close" size={24} color="#c9d1d9" />
        <Text style={styles.font}>Cancel</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "#363B42",
  },
  firstTab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  notFirstTab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderLeftWidth: 1,
    borderColor: "#363B42",
  },
  icon: {
    marginRight: 10,
  },
  font: {
    color: "#c9d1d9",
    fontWeight: "700",
  },
});
