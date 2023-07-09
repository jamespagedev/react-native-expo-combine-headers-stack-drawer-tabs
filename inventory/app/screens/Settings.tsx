import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import { initialSettings, useSettingsStore } from "@app/stores";
import { MainView } from "@app/components";
import {
  AcceptSection,
  DefaultHomeSection,
  ResetCacheSection,
  SwitchesSection,
} from "./settingsChildren";
import { screenNavigations } from "@app/utils";
import type { Settings, StackParamsList } from "@app/types";

export default function Settings(): JSX.Element {
  // variables
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();
  const refIsAcceptClicked = useRef(false);
  const { settings, setSettings, clearCacheSettings } = useSettingsStore(
    (store) => store
  );
  const [tempSettings, setTempSettings] = useState<Settings>(settings);

  // functions
  const isRouteSettingsInitial = () => {
    return (
      navigation.getState().routes[0].name.toString() ===
      screenNavigations.initialSettings.route
    );
  };

  const handleAcceptSettings = () => {
    if (!isRouteSettingsInitial()) refIsAcceptClicked.current = true;
    setSettings({ ...tempSettings, isSettingsAccepted: true });
  };

  const setDefaultHome = (route: string, screenTitle: string) => {
    setTempSettings({
      ...tempSettings,
      defaultHomePage: { route, screenTitle },
    });
  };

  const handleClearCacheSettings = async () => {
    setTempSettings(initialSettings);
    await clearCacheSettings();
  };

  // setup
  useEffect(() => {
    if (refIsAcceptClicked.current) {
      refIsAcceptClicked.current = false;
      navigation.navigate(settings.defaultHomePage.route as never);
    } else {
      setTempSettings(settings);
    }
  }, [settings]);

  // render
  return (
    <MainView>
      <ScrollView style={styles.container}>
        <View style={styles.form}>
          <AcceptSection acceptSettings={handleAcceptSettings} />
          <DefaultHomeSection
            defaultHomeRoute={settings.defaultHomePage.route}
            setDefaultHome={setDefaultHome}
          />
          <SwitchesSection
            autoSelectFirstShopOnLoad={tempSettings.autoSelectFirstShopOnLoad}
            autoDraftOrders={tempSettings.autoDraftOrders}
            setAutoSelectFirstShopOnLoad={() =>
              setTempSettings({
                ...tempSettings,
                autoSelectFirstShopOnLoad:
                  !tempSettings.autoSelectFirstShopOnLoad,
              })
            }
            setAutoDraftOrders={() =>
              setTempSettings({
                ...tempSettings,
                autoDraftOrders: !tempSettings.autoDraftOrders,
              })
            }
          />
          <ResetCacheSection clearDataCache={handleClearCacheSettings} />
        </View>
      </ScrollView>
    </MainView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  form: {
    gap: 20,
    width: "100%",
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#161b22",
  },
});
