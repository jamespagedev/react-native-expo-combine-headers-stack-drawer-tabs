import type {
  ApiResponseShops,
  OrderShopDropdownSelection,
  OrderShopIdsToDropdownSelection,
  Shop,
} from "@app/types";

export function getShopSelections(
  responseShops: ApiResponseShops
): Array<OrderShopDropdownSelection> {
  const shops: Array<OrderShopDropdownSelection> = responseShops.map(
    (shop: Shop) => {
      return {
        id: shop.id,
        name: shop.name,
        type: shop.type,
        value: shop.id,
        label: shop.name,
      };
    }
  );
  return shops;
}

export function getShopIdsToSelection(
  shopSelections: Array<OrderShopDropdownSelection>
): OrderShopIdsToDropdownSelection {
  const shopIdsToSelection: OrderShopIdsToDropdownSelection = {};
  shopSelections.forEach((s: OrderShopDropdownSelection) => {
    shopIdsToSelection[s.value] = s;
  });
  return shopIdsToSelection;
}
