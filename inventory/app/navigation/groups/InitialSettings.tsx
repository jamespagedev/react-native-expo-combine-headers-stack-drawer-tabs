import React, { ReactNode } from "react";
import { getStackScreenOptions } from "@app/navigation/Options";
import { Settings } from "@app/screens";
import { screenNavigations } from "@app/utils";
import { NavigationStack } from "@app/types";

export default function InitialSettings(Stack: NavigationStack): ReactNode {
  return (
    <Stack.Screen
      name={screenNavigations.initialSettings.route as never}
      component={Settings}
      options={getStackScreenOptions(
        screenNavigations.initialSettings.route,
        screenNavigations.initialSettings.screenTitle
      )}
    />
  );
}
