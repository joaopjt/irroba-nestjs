import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import CreateCategoryDto from './dto/create-category.dto';
import UpdateCategoryDto from './dto/update-category.dto';

import { Category } from './schemas/category.schema';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories(): Promise<Product[]> {
      return this.categoriesService.getCategories();
  }
  
  @Get(':id')
  async getCategory(@Param('id') id: string): Promise<Product> {
    return this.categoriesService.getProductById(id);
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
      return this.categoriesService.createProduct(createProductDto.name, createProductDto.price, createProductDto.sku)
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() updateUserDto: UpdateProductDto): Promise<Product> {
      return this.categoriesService.updateProduct(id, updateUserDto);
  }

  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string): Promise<Product> {
    return this.categoriesService.deleteProduct(productId);
  }
}
