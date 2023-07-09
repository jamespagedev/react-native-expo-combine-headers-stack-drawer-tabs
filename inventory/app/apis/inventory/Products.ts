import { axiosPostRequest } from "./AxiosWrapper";
import { products } from "@app/data";
import { productsApiEndpoints, sleep } from "@app/utils";
import { ApiResponseGetProducts, FakeProducts, Product } from "@app/types";

export async function apiValidateProduct(
  shopId: number,
  productName: string
): Promise<boolean> {
  try {
    const result = await axiosPostRequest([
      productsApiEndpoints.products,
      { shopId, productName },
    ]);
    return result.data.Response;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function fakeApiValidateProduct<K extends keyof FakeProducts>(
  shopId: K,
  productName: string
): Promise<number> {
  try {
    await sleep(2000);
    const result = products[shopId].filter(
      (prod: Product) => prod.name.toLowerCase() === productName.toLowerCase()
    );
    if (result.length === 0) return 0;
    return result[0].id;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function fakeApiGetProducts<K extends keyof FakeProducts>(
  shopId: K
): Promise<ApiResponseGetProducts> {
  try {
    await sleep(2000);
    const result = products[shopId];
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}
