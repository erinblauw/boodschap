
import { Brand } from "./util";

export type ProductId = Brand<string, "ProductId">
export type ProductCategoryId = Brand<string, "ProductCategoryId">

// catalog/{ProductCategoryId}
export type ProductCategory = {
  name: string
}

// catalog/{ProductCategoryId}/products/{ProductId}
export type ProductItem = {
  name: string,
}
