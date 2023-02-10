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
  
  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<Product> {
    return this.productsService.getProductById(userId);
  }

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
      return this.productsService.createProduct(createProductDto.name, createProductDto.price, createProductDto.sku)
  }

  @Patch(':userId')
  async updateProduct(@Param('userId') userId: string, @Body() updateUserDto: UpdateProductDto): Promise<Product> {
      return this.productsService.updateProduct(userId, updateUserDto);
  }

  @Delete(':productId')
  async deleteProduct(@Param('productId') productId: string): Promise<Product> {
    return this.productsService.deleteProduct(productId);
  }
}
