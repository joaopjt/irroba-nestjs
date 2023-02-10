import { IsNotEmpty } from 'class-validator';

export default class CreateCategorieDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;
}