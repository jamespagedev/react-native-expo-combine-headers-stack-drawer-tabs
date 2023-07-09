import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useLoadingStore, useSettingsStore } from "@app/stores";
import { Auth, InitialSettings, Loading, Main } from "@app/navigation/groups";
import {
  getInitialroute,
  getNavigatorScreenOptions,
} from "@app/navigation/Options";
import type { StackParamsList } from "@app/types";
import { useViewerStore } from "@app/stores/Viewer";

const Stack = createStackNavigator<StackParamsList>();

export function getStackGroup(
  isLoadingApp: boolean,
  isViewerAuthenticated: boolean,
  isSettingsAccepted: boolean
): ReactNode {
  if (isLoadingApp) {
    return Loading(Stack);
  } else if (!isViewerAuthenticated) {
    return Auth(Stack);
  } else if (!isSettingsAccepted) {
    return InitialSettings(Stack);
  }
  return Main(Stack);
}

export default function NavigationConductor() {
  const { isLoadingApp } = useLoadingStore((store) => store);
  const { isViewerAuthenticated, logout } = useViewerStore((store) => store);
  const { settings } = useSettingsStore((store) => store);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={getInitialroute(isLoadingApp, isViewerAuthenticated)}
        screenOptions={({ route }) =>
          getNavigatorScreenOptions(route.name, logout)
        }
      >
        {getStackGroup(
          isLoadingApp,
          isViewerAuthenticated,
          settings.isSettingsAccepted
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* ToDo: loading modal(see "common modal screens")
<Stack.Navigator>
  {isLoggedIn ? (
    // Screens for logged in users
    <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Group>
  ) : (
    // Auth screens
    <Stack.Group screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Group>
  )}
  // Common modal screens
  <Stack.Group screenOptions={{ presentation: 'modal' }}>
    <Stack.Screen name="Help" component={Help} />
    <Stack.Screen name="Invite" component={Invite} />
  </Stack.Group>
</Stack.Navigator>
*/
