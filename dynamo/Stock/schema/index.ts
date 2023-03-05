import { Schema } from "dynamoose";

export const ProductSchema = new Schema(
  {
    id: {
      type: String,
      hashKey: true,
      required: true,
    },
    product_id: {
      type: String,
      rangeKey: true,
      required: true,
    },
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: {
      createdAt: "CreateDate",
      updatedAt: "UpdateDate",
    },
  }
);
