import React from "react";
import { Text, View } from "react-native";
import { MainView } from "@app/components";
import { globalStyles } from "@app/styles";

interface Props {
  msg: string;
}

export default function Loading({ msg }: Props): JSX.Element {
  return (
    <MainView>
      <View style={globalStyles.container}>
        <Text style={{ color: "#ffffff" }}>{msg}</Text>
      </View>
    </MainView>
  );
}

Loading.defaultProps = {
  msg: "Loading...",
};
