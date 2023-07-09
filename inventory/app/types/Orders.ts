import { ShopTypes } from "./Api";

export type OrderStatusValues = 1 | 2 | 3 | 4 | 5;

export interface OrderStatus {
  shop: OrderStatusValues;
  products: OrderStatusValues;
  review: OrderStatusValues;
  submitSuccess: OrderStatusValues;
  submitFailed: OrderStatusValues;
}

export interface OrderShipping {
  from: string;
  to: string;
  address: string;
  notes: string;
}

export interface Order {
  status: OrderStatusValues;
  shop: OrderShopDropdownSelection | null;
  products: Array<OrderProduct>;
  shipping: OrderShipping;
}

export interface OrderShopDropdownSelection {
  id: number;
  name: string;
  type: ShopTypes;
  value: number;
  label: string;
}

export type OrderShopIdsToDropdownSelection = {
  [key: string]: OrderShopDropdownSelection;
};

export type OrderProductNameValidationStatus =
  | "empty"
  | "validating"
  | "failed"
  | "success";

export interface OrderProduct {
  id: number;
  validationNameStatus: OrderProductNameValidationStatus;
  name: string;
  qty: string;
  notes: string;
}
