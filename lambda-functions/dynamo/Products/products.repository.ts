import { productsModel } from "./products.model";

class ProductsRepository {
  async addProduct(productTemplate: {
    id: string;
    title: string;
    description: string;
    price: number;
    count: number;
  }) {
    const product = new productsModel(productTemplate);

    return await productsModel.create(product);
  }

  async queryProducts() {
    // throws error of mismatched type
    return await productsModel.scan().exec();
  }

  async queryProductById(id: string) {
    // throws error of mismatched type
    return await productsModel.query("id").eq(id).exec();
  }
}
export const productsRepo = new ProductsRepository();
