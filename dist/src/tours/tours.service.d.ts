import { PrismaService } from 'src/shared/services/prisma.service';
import { Tour } from '@prisma/client';
export declare class ToursService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Tour[]>;
    getById(id: Tour['id']): Promise<Tour | null>;
    create(tourData: Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tour>;
    edit(id: Tour['id'], tourData: Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>): Promise<Tour>;
    delete(id: Tour['id']): Promise<Tour | null>;
}
