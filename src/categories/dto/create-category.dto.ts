import { IsNotEmpty } from 'class-validator';

export default class CreateCategorieDto {
    @IsNotEmpty()
    name: string;
}