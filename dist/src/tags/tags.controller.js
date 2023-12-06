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
exports.TagsController = void 0;
const common_1 = require("@nestjs/common");
const tags_service_1 = require("./tags.service");
const create_tags_dto_1 = require("./dtos/create-tags-dto");
const update_tags_dto_1 = require("./dtos/update-tags-dto");
let TagsController = class TagsController {
    constructor(tagsService) {
        this.tagsService = tagsService;
    }
    getAll() {
        return this.tagsService.getAll();
    }
    async getById(id) {
        const category = await this.tagsService.getById(id);
        if (!category)
            throw new common_1.NotFoundException('Category not found');
        return category;
    }
    create(categoryData) {
        return this.tagsService.create(categoryData);
    }
    async edit(categoryData, id) {
        const category = await this.tagsService.getById(id);
        if (!category)
            throw new common_1.NotFoundException('Category not found');
        else {
            await this.tagsService.edit(id, categoryData);
            return { sucess: true };
        }
    }
    async delete(id) {
        const category = await this.tagsService.getById(id);
        if (!category)
            throw new common_1.NotFoundException('Category does not exist');
        else {
            await this.tagsService.delete(id);
            return { sucess: true };
        }
    }
};
exports.TagsController = TagsController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tags_dto_1.CreateTagsDTO]),
    __metadata("design:returntype", void 0)
], TagsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_tags_dto_1.UpdateTagsDTO, String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TagsController.prototype, "delete", null);
exports.TagsController = TagsController = __decorate([
    (0, common_1.Controller)('tags'),
    __metadata("design:paramtypes", [tags_service_1.TagsService])
], TagsController);
//# sourceMappingURL=tags.controller.js.map