import { IsNotEmpty } from 'class-validator';

export default class CreateProductDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    sku: string;
}