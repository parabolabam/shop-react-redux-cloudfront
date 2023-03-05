import * as dynamoose from "dynamoose";

import { getTableName } from "@amagroup.io/amag-corelib";
import { Model } from "dynamoose/dist/Model";
import { ExampleSchema } from "./ExampleSchema";
import { CreateExampleRequest } from "./create-survey/CreateSurveyRequest";
import { UpdateExampleRequest } from "./update-survey/UpdateSurveyRequest";
import { Product } from "../schema";

export default class ExampleRepository {
  private dbInstance: Model<Product>;

  constructor(environment: string) {
    const tableName = getTableName(environment, "Example");
    this.dbInstance = dynamoose.model<ExampleModel>(tableName, ExampleSchema);
  }

  createExample = async (request: CreateExampleRequest) => {
    return await this.dbInstance.create({
      Id: request.Id,
      Module: request.Module,
    });
  };

  updateExample = async (request: UpdateExampleRequest) => {
    return await this.dbInstance.update({
      Id: request.Id,
      Module: request.Module,
      Description: request.Description,
    });
  };

  getExampleById = async (id: string, moduleName: string) => {
    return await this.dbInstance.get({ Id: id, Module: moduleName });
  };
}
