import { APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";
import { withCors } from "./cors";

export default async (): Promise<APIGatewayProxyResult> => {
  console.log("LOL");
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
      body: "Error occured",
    };
  }
};
