import { Schema } from "dynamoose";

export const ProductSchema = new Schema(
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
  },
  {
    timestamps: {
      createdAt: "CreateDate",
      updatedAt: "UpdateDate",
    },
  }
);
