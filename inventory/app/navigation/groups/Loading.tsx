import React, { ReactNode } from "react";
import { getStackScreenOptions } from "@app/navigation/Options";
import { Loading as LoadingScreen } from "@app/screens";
import { screenNavigations } from "@app/utils";
import { NavigationStack } from "@app/types";

export default function Loading(Stack: NavigationStack): ReactNode {
  return (
    <Stack.Screen
      name={screenNavigations.loading.route as never}
      component={LoadingScreen}
      options={getStackScreenOptions(
        screenNavigations.loading.route,
        screenNavigations.loading.screenTitle
      )}
    />
  );
}
