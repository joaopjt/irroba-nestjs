import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import UpdateCategoryDto from "./dto/update-category.dto";

import { Category } from './schemas/category.schema';
import { CategoriesRepository } from "./categories.repository";

@Injectable()
export class CategoriesService {
    constructor(private readonly categoriesRepository: CategoriesRepository) {}

    async getCategories(): Promise<Category[]> {
        return this.categoriesRepository.find({});
    }

    async getCategoryById(category_id: string): Promise<Category> {
        return this.categoriesRepository.findOne({ category_id })
    }

    async createCategory(name: string): Promise<Category> {
        return this.categoriesRepository.create({
            id: uuidv4(),
            name
        });
    }

    async updateCategory(id: string, updates: UpdateCategoryDto): Promise<Category> {
        return this.categoriesRepository.findOneAndUpdate({ id }, updates);
    }

     async deleteCategory(id: string): Promise<Category> {
        return this.categoriesRepository.delete({ id });
    }
}