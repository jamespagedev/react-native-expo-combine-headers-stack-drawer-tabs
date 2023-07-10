import { create } from "zustand";
import { fakeApiSubmitOrder } from "@app/apis";
import { copyByValue } from "@app/utils";
import {
  Order,
  OrderProduct,
  OrderShopDropdownSelection,
  OrderStatus,
} from "@app/types";
import { useViewerStore } from "@app/stores/Viewer";

interface OrderStore {
  order: Order;
  resetOrder: () => void;
  setShop: (s: OrderShopDropdownSelection) => void;
  setProducts: (p: Array<OrderProduct>) => void;
  submitOrder: () => Promise<void>;
}

export const orderStatus: OrderStatus = {
  shop: 1,
  products: 2,
  review: 3,
  submitSuccess: 4,
  submitFailed: 5,
};

const initialOrder: Order = {
  status: orderStatus.shop,
  shop: null,
  products: [],
  shipping: {
    from: "N/A",
    to: "N/A",
    address: "N/A",
    notes: "N/A",
  },
};

export const useOrdersStore = create<OrderStore>((set, get) => ({
  order: copyByValue(initialOrder),
  resetOrder: () => set(() => ({ order: copyByValue(initialOrder) })),
  setShop: (s: OrderShopDropdownSelection) => {
    const newOrder: Order = copyByValue(initialOrder);
    newOrder.shop = s;
    newOrder.status = orderStatus.products;
    set(() => ({ order: newOrder }));
  },
  setProducts: (p: Array<OrderProduct>) => {
    const updatedOrder: Order = get().order;
    updatedOrder.products = p;
    // ToDo: create shipping screen
    const viewerInfo = useViewerStore.getState().viewerInfo;
    updatedOrder.shipping = {
      from: `${viewerInfo?.firstName ?? ""} ${viewerInfo?.lastName ?? ""}`,
      to: "ToDo(ShippingScreen)",
      address: "ToDo(ShippingScreen)",
      notes: "ToDo(ShippingScreen)",
    };
    updatedOrder.status = orderStatus.review;
    set(() => ({ order: updatedOrder }));
  },
  submitOrder: async () => {
    try {
      const responseSubmitOrder = await fakeApiSubmitOrder(get().order);
      const updatedOrder: Order = get().order;
      updatedOrder.status = responseSubmitOrder
        ? orderStatus.submitSuccess
        : orderStatus.submitFailed;
      set(() => ({ order: updatedOrder }));
    } catch (error: any) {
      const updatedOrder: Order = get().order;
      updatedOrder.status = orderStatus.submitFailed;
      set(() => ({ order: updatedOrder }));
      throw new Error(error.message);
    }
  },
}));
