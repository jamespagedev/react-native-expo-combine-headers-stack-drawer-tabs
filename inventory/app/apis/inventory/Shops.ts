import { shops } from "@app/data";
import { sleep } from "@app/utils";
import { ApiResponseShops, Order } from "@app/types";

export async function fakeApiGetShops(): Promise<ApiResponseShops> {
  try {
    await sleep(2000);
    const result = shops;
    return result as never;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function fakeApiSubmitOrder(order: Order): Promise<boolean> {
  try {
    await sleep(2000);
    const result = order.products.length > 0;
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
}
