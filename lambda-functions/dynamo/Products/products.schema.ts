import { Schema } from "dynamoose";
import { Item } from "dynamoose/dist/Item";
import { schema as stockSchema } from "../Stock/stock.schema";

export class Product extends Item {
  id = "";
  title = "";
  descrioption = "";
  price = Infinity;
}

export const schema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    title: {
      type: String,
      rangeKey: true,
      required: true,
    },
    description: {
      type: String,
      required: false,
      default: "",
    },
    price: {
      type: Number,
      required: false,
      default: "",
    },
    count: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: {
      createdAt: "CreateDate",
      updatedAt: "UpdateDate",
    },
  }
);
