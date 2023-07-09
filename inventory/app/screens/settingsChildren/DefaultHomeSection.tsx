import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { screenNavigations } from "@app/utils";

interface Props {
  defaultHomeRoute: string;
  setDefaultHome: (route: string, screenTitle: string) => void;
}

const notSafeHomeScreenRoutes = new Set([
  screenNavigations.loading.route,
  screenNavigations.login.route,
  screenNavigations.signup.route,
  screenNavigations.orderReview.route,
  screenNavigations.orderProducts.route,
  screenNavigations.orderResults.route,
  screenNavigations.initialSettings.route,
  screenNavigations.settings.route,
  screenNavigations.browseProductDetails.route,
]);

export default function DefaultHomeSection({
  defaultHomeRoute,
  setDefaultHome,
}: Props): JSX.Element {
  // variables
  const [defaultHomeSelections] = useState<
    Array<{ value: string; label: string }>
  >(
    Object.values(screenNavigations)
      .map((screen) => {
        return { value: screen.route, label: screen.screenTitle };
      })
      .filter((selection) => !notSafeHomeScreenRoutes.has(selection.value))
  );
  const [defaultHomeValuesToSelections] = useState<{
    [key: string]: { value: string; label: string };
  }>(
    Object.values(screenNavigations)
      .map((screen) => {
        return { value: screen.route, label: screen.screenTitle };
      })
      .filter((selection) => !notSafeHomeScreenRoutes.has(selection.value))
      .reduce((obj, key) => ({ ...obj, [key.value]: key }), {})
  );

  // functions
  const handleSetDefaultHome = (value: string | null) => {
    if (value === null) return;
    setDefaultHome(
      defaultHomeValuesToSelections[value].value,
      defaultHomeValuesToSelections[value].label
    );
  };

  // render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set default home as:</Text>
      <View style={styles.rnPickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => handleSetDefaultHome(value)}
          items={defaultHomeSelections}
          value={defaultHomeRoute}
          placeholder={{}}
          style={{
            placeholder: { color: "#c9d1d9" },
            inputAndroid: {
              color: "#c9d1d9",
              backgroundColor: "#21262d",
              borderColor: "#21262d",
            },
            inputIOS: {
              color: "#c9d1d9",
              backgroundColor: "#21262d",
              borderColor: "#21262d",
            },
            inputWeb: {
              color: "#c9d1d9",
              backgroundColor: "#21262d",
              borderColor: "#21262d",
            },
          }}
        />
      </View>
      <Text style={styles.description}>
        This setting will allow you to choose the default home page.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    window: "100%",
    gap: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#363B42",
  },
  rnPickerContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#96a6ad",
    borderRadius: 2,
  },
  title: {
    color: "#c9d1d9",
    fontWeight: "700",
  },
  description: {
    color: "#c9d1d9",
  },
});
