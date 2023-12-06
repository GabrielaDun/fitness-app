"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToursService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
let ToursService = class ToursService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.tour.findMany({ include: { category: true } });
    }
    getById(id) {
        return this.prismaService.tour.findUnique({
            where: { id },
            include: { category: true },
        });
    }
    create(tourData) {
        const { categoryId, ...otherData } = tourData;
        try {
            return this.prismaService.tour.create({
                data: {
                    ...otherData,
                    category: {
                        connect: { id: categoryId },
                    },
                },
            });
        }
        catch (error) {
            if (error.code === 'P2025')
                throw new common_1.BadRequestException('Tour does not exist');
        }
    }
    edit(id, tourData) {
        const { categoryId, ...otherData } = tourData;
        return this.prismaService.tour.update({
            where: { id },
            data: {
                ...otherData,
                category: { connect: { id: categoryId } },
            },
        });
    }
    delete(id) {
        return this.prismaService.tour.delete({
            where: { id },
        });
    }
};
exports.ToursService = ToursService;
exports.ToursService = ToursService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ToursService);
//# sourceMappingURL=tours.service.js.map