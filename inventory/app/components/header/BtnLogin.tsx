import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { screenNavigations } from "@app/utils";
import type { StackParamsList } from "@app/types";

export default function BtnLogin(): JSX.Element {
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();
  return (
    <Button
      onPress={() =>
        navigation.navigate(screenNavigations.login.route as never)
      }
      title="Login"
    />
  );
}
