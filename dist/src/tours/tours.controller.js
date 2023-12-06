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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToursController = void 0;
const common_1 = require("@nestjs/common");
const tours_service_1 = require("./tours.service");
const create_tour_dto_1 = require("./dtos/create-tour.dto");
const update_tour_dto_1 = require("./dtos/update-tour.dto");
let ToursController = class ToursController {
    constructor(toursService) {
        this.toursService = toursService;
    }
    getAll() {
        return this.toursService.getAll();
    }
    async getById(id) {
        const tour = await this.toursService.getById(id);
        if (!tour)
            throw new common_1.NotFoundException('Tour not found');
        return tour;
    }
    create(tourData) {
        return this.toursService.create(tourData);
    }
    async edit(tourData, id) {
        const tour = await this.toursService.getById(id);
        if (!tour)
            throw new common_1.NotFoundException('Tour not found');
        else {
            await this.toursService.edit(id, tourData);
            return { sucess: true };
        }
    }
    async delete(id) {
        const tour = await this.toursService.getById(id);
        if (!tour)
            throw new common_1.NotFoundException('Tour does not exist');
        else {
            await this.toursService.delete(id);
            return { sucess: true };
        }
    }
};
exports.ToursController = ToursController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ToursController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ToursController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tour_dto_1.CreateTourDTO]),
    __metadata("design:returntype", void 0)
], ToursController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tour_dto_1.UpdateTourDTO, String]),
    __metadata("design:returntype", Promise)
], ToursController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ToursController.prototype, "delete", null);
exports.ToursController = ToursController = __decorate([
    (0, common_1.Controller)('tours'),
    __metadata("design:paramtypes", [tours_service_1.ToursService])
], ToursController);
//# sourceMappingURL=tours.controller.js.map