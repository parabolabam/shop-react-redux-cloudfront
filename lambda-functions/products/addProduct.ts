import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";
import { productsRepo } from "../dynamo/Products/products.repository";
import { withCors } from "../cors";

export const handler: APIGatewayProxyHandler = withCors(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const product = JSON.parse(event.body ?? "");
    let item;
    try {
      item = await productsRepo.addProduct(product);

      return {
        statusCode: 200,
        body: JSON.stringify(item),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify(err),
      };
    }
  }
);
