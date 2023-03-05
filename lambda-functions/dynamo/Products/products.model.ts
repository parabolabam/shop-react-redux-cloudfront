import { model } from "dynamoose";
import { schema } from "./products.schema";
import { Product } from "./products.schema";

export const productsModel = model<Product>(
  process.env.PRODUCT_TABLE ?? "",
  schema
);
