import {
  DefaultNavigatorOptions,
  ParamListBase,
  StackNavigationState,
  StackRouterOptions,
  TypedNavigator,
} from "@react-navigation/native";
import {
  StackNavigationEventMap,
  StackNavigationOptions,
} from "@react-navigation/stack";
import {
  StackNavigationConfig,
  StackNavigationProp,
} from "@react-navigation/stack/lib/typescript/src/types";

export interface ScreenNavigations {
  [key: string]: { route: string; screenTitle: string };
}

export type StackParamsList = {
  BrowseProductDetails: undefined;
  BrowseProducts: undefined;
  Dashboard: undefined;
  Loading: { msg: string };
  Login: undefined;
  OrderProducts: undefined;
  OrderResults: undefined;
  OrderReview: undefined;
  OrderShop: undefined;
  Settings: undefined;
  Signup: undefined;
};

type NavigationStackProps = DefaultNavigatorOptions<
  ParamListBase,
  StackNavigationState<ParamListBase>,
  StackNavigationOptions,
  StackNavigationEventMap
> &
  StackRouterOptions &
  StackNavigationConfig;

export type NavigationStack = TypedNavigator<
  StackParamsList,
  StackNavigationState<ParamListBase>,
  StackNavigationOptions,
  StackNavigationEventMap,
  ({
    id,
    initialRouteName,
    children,
    screenListeners,
    screenOptions,
    ...rest
  }: NavigationStackProps) => JSX.Element
>;
