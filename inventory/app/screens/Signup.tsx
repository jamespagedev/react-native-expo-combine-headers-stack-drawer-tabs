import React from "react";
import { Text, View } from "react-native";
import { MainView } from "@app/components";
import { globalStyles } from "@app/styles";

export default function Signup(): JSX.Element {
  return (
    <MainView>
      <View style={globalStyles.container}>
        <Text style={{ color: "#ffffff" }}>ToDo: Signup</Text>
      </View>
    </MainView>
  );
}
