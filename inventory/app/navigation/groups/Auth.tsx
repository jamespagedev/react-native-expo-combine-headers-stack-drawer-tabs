import React, { ReactNode } from "react";
import { getStackScreenOptions } from "@app/navigation/Options";
import { Login, Signup } from "@app/screens";
import { screenNavigations } from "@app/utils";
import { NavigationStack } from "@app/types";

export default function Auth(Stack: NavigationStack): ReactNode {
  return (
    <Stack.Group>
      <Stack.Screen
        name={screenNavigations.login.route as never}
        component={Login}
        options={getStackScreenOptions(
          screenNavigations.login.route,
          screenNavigations.login.screenTitle
        )}
      />
      <Stack.Screen
        name={screenNavigations.signup.route as never}
        component={Signup}
        options={getStackScreenOptions(
          screenNavigations.signup.route,
          screenNavigations.signup.screenTitle
        )}
      />
    </Stack.Group>
  );
}
