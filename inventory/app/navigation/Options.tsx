import React from "react";
import { Button } from "react-native";
import { BtnLogin, BtnSignup } from "@app/components";
import { screenNavigations } from "@app/utils";

const screenAuthRoutes = new Set([
  screenNavigations.login.route,
  screenNavigations.signup.route,
]);

const screenNoBackRoutes = new Set([
  screenNavigations.initialSettings.route,
  screenNavigations.orderResults.route,
  screenNavigations.dashboard.route,
]);

const screenSlideRoutes = new Set([
  screenNavigations.browseProductDetails.route,
  screenNavigations.orderProducts.route,
  screenNavigations.orderReview.route,
]);

function getAuthNavigatorScreenOptions(routeName: string): any {
  return {
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "#010409" },
    headerRightContainerStyle: { paddingRight: 10 },
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerTitleStyle: { color: "#ffffff" },
    headerTintColor: "#ffffff",
    headerBackVisible: false,
    headerLeft: () => null,
    headerRight: () =>
      routeName === screenNavigations.login.route ? (
        <BtnSignup />
      ) : (
        <BtnLogin />
      ),
  };
}

function getNoBackNavigatorScreenOptions(logout: () => Promise<void>): any {
  return {
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "#010409" },
    headerRightContainerStyle: { paddingRight: 10 },
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerTitleStyle: { color: "#ffffff" },
    headerTintColor: "#ffffff",
    headerBackVisible: false,
    headerLeft: () => null,
    headerRight: () => <Button onPress={logout} title="Logout" />,
  };
}

function getSlideNavigatorScreenOptions(logout: () => Promise<void>): any {
  return {
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "#010409" },
    headerRightContainerStyle: { paddingRight: 10 },
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerTitleStyle: { color: "#ffffff" },
    headerTintColor: "#ffffff",
    gestureResponseDistance: 20,
    gestureEnabled: true,
    gestureDirection: "horizontal",
    headerRight: () => <Button onPress={logout} title="Logout" />,
  };
}

function getDefaultNavigatorScreenOptions(logout: () => Promise<void>): any {
  return {
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "#010409" },
    headerRightContainerStyle: { paddingRight: 10 },
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerTitleStyle: { color: "#ffffff" },
    headerTintColor: "#ffffff",
    headerRight: () => <Button onPress={logout} title="Logout" />,
  };
}

function getHideHeaderStackScreenOptions(): any {
  return { headerShown: false };
}

function getSlideStackScreenOptions(screenTitle: string): any {
  return {
    title: screenTitle,
    cardStyleInterpolator: ({ current, layouts }: any) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
}

function getDefaultStackScreenOptions(screenTitle: string): any {
  return {
    title: screenTitle,
  };
}

export function getInitialroute(
  isLoadingApp: boolean,
  isViewerAuthenticated: boolean
): never {
  if (isLoadingApp) {
    return screenNavigations.loading.route as never;
  } else if (!isViewerAuthenticated) {
    return screenNavigations.login.route as never;
  }
  return screenNavigations.dashboard.route as never;
}

export function getNavigatorScreenOptions(
  routeName: string,
  logout: () => Promise<void>
): any {
  if (screenAuthRoutes.has(routeName))
    return getAuthNavigatorScreenOptions(routeName);
  if (screenNoBackRoutes.has(routeName))
    return getNoBackNavigatorScreenOptions(logout);
  if (screenSlideRoutes.has(routeName))
    return getSlideNavigatorScreenOptions(logout);
  return getDefaultNavigatorScreenOptions(logout);
}

export function getStackScreenOptions(route: string, screenTitle: string): any {
  if (route === screenNavigations.loading.route) {
    return getHideHeaderStackScreenOptions();
  }
  if (screenSlideRoutes.has(route)) {
    return getSlideStackScreenOptions(screenTitle);
  }
  return getDefaultStackScreenOptions(screenTitle);
}
