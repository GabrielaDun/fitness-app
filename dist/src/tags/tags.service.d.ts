import { Tag } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class TagsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Tag[]>;
    getById(id: Tag['id']): Promise<Tag | null>;
    create(tagData: Omit<Tag, 'id'>): Promise<Tag>;
    edit(id: Tag['id'], tagData: Omit<Tag, 'id'>): Promise<Tag>;
    delete(id: Tag['id']): Promise<Tag | null>;
}
