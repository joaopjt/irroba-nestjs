import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import CreateProductDto from './dto/create-product.dto';
import UpdateProductDto from './dto/update-product.dto';

import { Product } from './schemas/product.schema';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
      return this.productsService.getProducts();
  }
  
  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productsService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
      return this.productsService.createProduct(createProductDto.name, createProductDto.price, createProductDto.sku, createProductDto.categories)
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() updateProductrDto: UpdateProductDto): Promise<Product> {
      return this.productsService.updateProduct(id, updateProductrDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') productId: string): Promise<Product> {
    return this.productsService.deleteProduct(productId);
  }

  @Get(':id/categories')
  async getProductCategories(@Param('id') categoryId: string): Promise<Product> {
    return this.productsService.getProductCategories(categoryId);
  }
}
