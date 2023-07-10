import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

interface Props {
  title: string;
  description: string;
  isEnabled: boolean;
  setToggle: () => void;
}

export default function SwitchContainer({
  title,
  description,
  isEnabled,
  setToggle,
}: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.titleText}>{title}</Text>
        <Switch
          trackColor={{ false: "#c0392b", true: "#54af54" }}
          thumbColor="#ffffff"
          ios_backgroundColor="#ffffff"
          onValueChange={setToggle}
          value={isEnabled}
        />
      </View>
      {isEnabled && (
        <View style={styles.containerBottom}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#363B42",
    borderRadius: 10,
    backgroundColor: "#e39a22",
  },
  containerTop: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  containerBottom: {
    padding: 10,
    backgroundColor: "#545960",
    borderTopWidth: 1,
    borderTopColor: "#363B42",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleText: {
    color: "#ffffff",
    fontWeight: "700",
  },
  descriptionText: {
    color: "#c9d1d9",
  },
});
