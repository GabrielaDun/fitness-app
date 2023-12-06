import { Category } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class CategoriesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Category[]>;
    getById(id: Category['id']): Promise<Category | null>;
    create(categoryData: Omit<Category, 'id'>): Promise<Category>;
    edit(id: Category['id'], categoryData: Omit<Category, 'id'>): Promise<Category>;
    delete(id: Category['id']): Promise<Category | null>;
}
