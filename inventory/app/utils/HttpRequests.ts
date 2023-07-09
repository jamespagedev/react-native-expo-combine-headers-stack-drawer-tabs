import { ScreenNavigations } from "@app/types";

export const productsApiEndpoints: { [key: string]: string } = {
  products: "products",
};

export const screenNavigations: ScreenNavigations = {
  browseProducts: { route: "browse-products", screenTitle: "Products" },
  browseProductDetails: {
    route: "browse-product-details",
    screenTitle: "Product Details",
  },
  dashboard: { route: "dashboard", screenTitle: "Dashboard" },
  initialSettings: { route: "initial-settings", screenTitle: "Settings" },
  loading: { route: "loading", screenTitle: "" },
  login: { route: "login", screenTitle: "Login" },
  orderProducts: { route: "order-products", screenTitle: "New Order" },
  orderReview: { route: "order-review", screenTitle: "New Order" },
  orderResults: { route: "order-results", screenTitle: "Order Results" },
  orderShop: { route: "order-shop", screenTitle: "New Order" },
  settings: { route: "settings", screenTitle: "Settings" },
  signup: { route: "signup", screenTitle: "Signup" },
};
