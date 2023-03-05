import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { productsRepo } from "../dynamo/Products/products.repository";
import { withCors } from "../cors";

export const handler: APIGatewayProxyHandler = withCors(
  async (): Promise<APIGatewayProxyResult> => {
    try {
      return {
        statusCode: 200,
        body: JSON.stringify(await productsRepo.queryProducts()),
      };
    } catch (err: unknown) {
      return {
        statusCode: 500,

        body: JSON.stringify(err),
      };
    }
  }
);
