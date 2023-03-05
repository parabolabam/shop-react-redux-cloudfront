import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from "aws-lambda";
import { productsRepo } from "../dynamo/Products/products.repository";
import { withCors } from "../cors";

export const handler: APIGatewayProxyHandler = withCors(
  async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
      if (event.pathParameters?.id) {
        const product = await productsRepo.queryProductById(
          event.pathParameters?.id
        );
        if (!product) {
          return {
            statusCode: 404,
            body: "",
          };
        }

        return {
          statusCode: 200,
          body: JSON.stringify(product),
        };
      }

      return {
        statusCode: 400,
        body: "Please provide Id",
      };
    } catch (err: unknown) {
      return {
        statusCode: 500,
        body: "Error occured",
      };
    }
  }
);
