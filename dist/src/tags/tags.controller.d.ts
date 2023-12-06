import { TagsService } from './tags.service';
import { CreateTagsDTO } from './dtos/create-tags-dto';
import { UpdateTagsDTO } from './dtos/update-tags-dto';
export declare class TagsController {
    private tagsService;
    constructor(tagsService: TagsService);
    getAll(): Promise<{
        id: string;
        tag: string;
    }[]>;
    getById(id: string): Promise<{
        id: string;
        tag: string;
    }>;
    create(categoryData: CreateTagsDTO): Promise<{
        id: string;
        tag: string;
    }>;
    edit(categoryData: UpdateTagsDTO, id: string): Promise<{
        sucess: boolean;
    }>;
    delete(id: string): Promise<{
        sucess: boolean;
    }>;
}
