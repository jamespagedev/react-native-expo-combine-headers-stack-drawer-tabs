export type ShopTypes = "local" | "online" | "hybrid";

export interface Product {
  id: number;
  name: string;
  inStock: number;
  ordered: number;
  description: string;
}

export interface Shop {
  id: number;
  name: string;
  type: ShopTypes;
}

export type ApiResponseShops = Array<Shop>;

export interface FakeProducts {
  "1": Array<Product>;
  "2": Array<Product>;
  "3": Array<Product>;
}

export type ApiResponseGetProducts = Array<Product>;

export interface ApiResponseGetCurrentUser {
  id: string;
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ApiResponsePostLogin {
  id: string;
  token: string;
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
}
