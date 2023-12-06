import { CategoriesService } from './categories.service';
import { CreateCategoryDTO } from './dtos/create-categories.dto';
import { UpdateCategoryDTO } from './dtos/update-categories.dto';
export declare class CategoriesController {
    private categoriesService;
    constructor(categoriesService: CategoriesService);
    getAll(): Promise<{
        id: string;
        category: string;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        category: string;
    }>;
    create(categoryData: CreateCategoryDTO): Promise<{
        id: string;
        category: string;
    }>;
    edit(categoryData: UpdateCategoryDTO, id: string): Promise<{
        sucess: boolean;
    }>;
    delete(id: string): Promise<{
        sucess: boolean;
    }>;
}
