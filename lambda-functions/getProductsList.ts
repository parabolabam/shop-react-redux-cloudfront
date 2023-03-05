import { APIGatewayProxyHandler } from "aws-lambda";
import { LambdaAPIGatewayProxyResult } from "./interfaces";

export const handler: APIGatewayProxyHandler =
  async (): Promise<LambdaAPIGatewayProxyResult> => {
    try {
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify([]),
      };
    } catch (err: unknown) {
      return {
        statusCode: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: "Error occured",
      };
    }
  };
