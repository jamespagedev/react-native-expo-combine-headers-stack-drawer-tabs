import React, { ReactNode } from "react";
import {
  BrowseProducts,
  BrowseProductDetails,
  Dashboard,
  OrderProducts,
  OrderReview,
  OrderShop,
  Settings,
  OrderResults,
} from "@app/screens";
import { getStackScreenOptions } from "@app/navigation/Options";
import { screenNavigations } from "@app/utils";
import { NavigationStack } from "@app/types";

export default function Main(Stack: NavigationStack): ReactNode {
  return (
    <Stack.Group>
      <Stack.Screen
        name={screenNavigations.dashboard.route as never}
        component={Dashboard}
        options={getStackScreenOptions(
          screenNavigations.dashboard.route,
          screenNavigations.dashboard.screenTitle
        )}
      />
      <Stack.Screen
        name={screenNavigations.settings.route as never}
        component={Settings}
        options={getStackScreenOptions(
          screenNavigations.settings.route,
          screenNavigations.settings.screenTitle
        )}
      />
      <Stack.Screen
        name={screenNavigations.orderShop.route as never}
        component={OrderShop}
        options={getStackScreenOptions(
          screenNavigations.orderShop.route,
          screenNavigations.orderShop.screenTitle
        )}
      />
      <Stack.Screen
        name={screenNavigations.orderProducts.route as never}
        component={OrderProducts}
        options={getStackScreenOptions(
          screenNavigations.orderProducts.route,
          screenNavigations.orderProducts.screenTitle
        )}
      />
      <Stack.Screen
        name={screenNavigations.orderReview.route as never}
        component={OrderReview}
        options={getStackScreenOptions(
          screenNavigations.orderReview.route,
          screenNavigations.orderReview.screenTitle
        )}
      />
      <Stack.Screen
        name={screenNavigations.orderResults.route as never}
        component={OrderResults}
        options={getStackScreenOptions(
          screenNavigations.orderResults.route,
          screenNavigations.orderResults.screenTitle
        )}
      />
      <Stack.Screen
        name={screenNavigations.browseProducts.route as never}
        component={BrowseProducts}
        options={getStackScreenOptions(
          screenNavigations.browseProducts.route,
          screenNavigations.browseProducts.screenTitle
        )}
      />
      <Stack.Screen
        name={screenNavigations.browseProductDetails.route as never}
        component={BrowseProductDetails}
        options={getStackScreenOptions(
          screenNavigations.browseProductDetails.route,
          screenNavigations.browseProductDetails.screenTitle
        )}
      />
    </Stack.Group>
  );
}
