import { Injectable } from "@nestjs/common";
import Mongoose, { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model, Query} from "mongoose";

import { Product, ProductDocument } from "./schemas/product.schema";

@Injectable()
export class ProductsRepository {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async find(): Promise<Product[]> {
        return this.productModel.find();
    }

    async findOne(productFilterQuery: FilterQuery<Product>): Promise<Product> {
        return this.productModel.findOne(productFilterQuery);
    }

    async create(product: Product): Promise<Product> {
        const newProduct = new this.productModel(product);

        return newProduct.save()
    }

    async findOneAndUpdate(productFilterQuery: FilterQuery<Product>, product: Partial<Product>): Promise<Product> {
        return this.productModel.findOneAndUpdate(productFilterQuery, product, { new: true });
    }

    async delete(productFilterQuery: FilterQuery<Product>): Promise<Query<any, ProductDocument>> {
        const deleted = this.productModel.deleteOne(productFilterQuery);

        return deleted;
    }

    async getProductCategories(product: FilterQuery<Product>): Promise<Product> {
        return this.productModel.findOne(product).select('categories');
    }
}