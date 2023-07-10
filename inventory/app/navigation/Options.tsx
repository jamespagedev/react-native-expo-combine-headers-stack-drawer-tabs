import React from "react";
import { Button } from "react-native";
import { BtnLogin, BtnSignup, Hamburger } from "@app/components";
import { screenNavigations } from "@app/utils";

const screenAuthRoutes = new Set([
  screenNavigations.login.route,
  screenNavigations.signup.route,
]);

const screenNoBackWithHamburgerRoutes = new Set([
  screenNavigations.orderResults.route,
  screenNavigations.dashboard.route,
]);

const screenNoBackRoutesAndLogout = new Set([
  screenNavigations.initialSettings.route,
]);

const screenSlideWithHamburgerRoutes = new Set([
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

function getNoBackWithHamburgerNavigatorScreenOptions(): any {
  return {
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "#010409" },
    headerRightContainerStyle: { paddingRight: 10 },
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerTitleStyle: { color: "#ffffff" },
    headerTintColor: "#ffffff",
    headerBackVisible: false,
    headerLeft: () => null,
    headerRight: () => <Hamburger />,
  };
}

function getNoBackWithLogoutNavigatorScreenOptions(
  logout: () => Promise<void>
): any {
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

function getSlideWithHamburgerNavigatorScreenOptions(): any {
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
    headerRight: () => <Hamburger />,
  };
}

function getDefaultNavigatorScreenOptions(): any {
  return {
    headerTitleAlign: "center",
    headerStyle: { backgroundColor: "#010409" },
    headerRightContainerStyle: { paddingRight: 10 },
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerTitleStyle: { color: "#ffffff" },
    headerTintColor: "#ffffff",
    headerRight: () => <Hamburger />,
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
  if (screenAuthRoutes.has(routeName)) {
    return getAuthNavigatorScreenOptions(routeName);
  } else if (screenNoBackWithHamburgerRoutes.has(routeName)) {
    return getNoBackWithHamburgerNavigatorScreenOptions();
  } else if (screenNoBackRoutesAndLogout.has(routeName)) {
    return getNoBackWithLogoutNavigatorScreenOptions(logout);
  } else if (screenSlideWithHamburgerRoutes.has(routeName)) {
    return getSlideWithHamburgerNavigatorScreenOptions();
  }
  return getDefaultNavigatorScreenOptions();
}

export function getStackScreenOptions(route: string, screenTitle: string): any {
  if (route === screenNavigations.loading.route) {
    return getHideHeaderStackScreenOptions();
  }
  if (screenSlideWithHamburgerRoutes.has(route)) {
    return getSlideStackScreenOptions(screenTitle);
  }
  return getDefaultStackScreenOptions(screenTitle);
}
