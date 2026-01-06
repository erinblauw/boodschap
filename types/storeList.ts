import { Brand } from "./util";
import { ProductId } from "./product";

export type StoreListId = Brand<string, "StoreListId">
export type StoreListItemId = Brand<string, "StoreListItemId">
export type UserId = Brand<string, "UserId">

// lists/{StoreListId}
export type StoreList = {
  name: string
  memberIds: UserId[]
}

// lists/{StoreListId}/items/{StoreListItemId}
export type StoreListItem = {
  productId: ProductId
  collectedAt: number[] // unix timepstamps
  toCollect: boolean
}
