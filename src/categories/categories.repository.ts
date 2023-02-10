import { Injectable } from "@nestjs/common";
import Mongoose, { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";

import { Category, CategoryDocument } from "./schemas/product.schema";

@Injectable()
export class CategoriesRepository {
    constructor(@InjectModel(Category.name) private categoriesModel: Model<CategoryDocument>) {}

    async find(categoriesFilterQuery: FilterQuery<Category>): Promise<Category[]> {
        return this.categoriesModel.find(categoriesFilterQuery)
    }

    async findOne(categoriesFilterQuery: FilterQuery<Category>): Promise<Category> {
        return this.categoriesModel.findOne(categoriesFilterQuery);
    }

    async create(category: Category): Promise<Category> {
        const newCategorie = new this.categoriesModel(category);

        return newCategorie.save()
    }

    async findOneAndUpdate(categoryFilterQuery: FilterQuery<Category>, category: Partial<Category>): Promise<Category> {
        return this.categoriesModel.findOneAndUpdate(categoryFilterQuery, category);
    }

    async delete(categoryFilterQuery: FilterQuery<Category>): Promise<Category> {
        const deleted = await this.categoriesModel.deleteOne(categoryFilterQuery);

        return null;
    }
}