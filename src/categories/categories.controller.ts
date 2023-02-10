import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import CreateCategoryDto from './dto/create-category.dto';
import UpdateCategoryDto from './dto/update-category.dto';

import { Category } from './schemas/category.schema';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  async getCategories(): Promise<Category[]> {
      return this.categoriesService.getCategories();
  }
  
  @Get(':id')
  async getCategory(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.getCategoryById(id);
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
      return this.categoriesService.createCategory(createCategoryDto.name)
  }

  @Patch(':id')
  async updateProduct(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto): Promise<Category> {
      return this.categoriesService.updateCategory(id, updateCategoryDto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<Category> {
    return this.categoriesService.deleteCategory(id);
  }
}
