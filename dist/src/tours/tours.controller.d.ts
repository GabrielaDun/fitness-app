import { ToursService } from './tours.service';
import { CreateTourDTO } from './dtos/create-tour.dto';
import { UpdateTourDTO } from './dtos/update-tour.dto';
export declare class ToursController {
    private toursService;
    constructor(toursService: ToursService);
    getAll(): any;
    getById(id: string): Promise<{
        id: string;
        title: string;
        price: number;
        url: string;
        mainCountry: string;
        imageMain: string;
        imagesGallery: string;
        shortDescription: string;
        longDescription: string;
        tourDurationDays: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
    }>;
    create(tourData: CreateTourDTO): Promise<{
        id: string;
        title: string;
        price: number;
        url: string;
        mainCountry: string;
        imageMain: string;
        imagesGallery: string;
        shortDescription: string;
        longDescription: string;
        tourDurationDays: number;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
    }>;
    edit(tourData: UpdateTourDTO, id: string): Promise<{
        sucess: boolean;
    }>;
    delete(id: string): Promise<{
        sucess: boolean;
    }>;
}
