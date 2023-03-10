import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import UpdateProductDto from "./dto/update-product.dto";

import { Product } from "./schemas/product.schema";
import { ProductsRepository } from "./products.repository";

@Injectable()
export class ProductsService {
    constructor(private readonly productsRepository: ProductsRepository) {}

    async getProducts(): Promise<Product[]> {
        return this.productsRepository.find();
    }

    async getProductById(productId: string): Promise<Product> {
        return this.productsRepository.findOne({ productId })
    }

    async createProduct(name: string, price: number, sku: string, categories: [string]): Promise<Product> {
        return this.productsRepository.create({
            id: uuidv4(),
            name,
            price,
            sku,
            categories
        });
    }

    async updateProduct(id: string, updates: UpdateProductDto): Promise<Product> {
        return this.productsRepository.findOneAndUpdate({ id }, updates);
    }

     async deleteProduct(id: string): Promise<Product> {
        return this.productsRepository.delete({ id });
    }

    async getProductCategories(id: string): Promise<Product> {
        return this.productsRepository.getProductCategories({ id });
    }
}