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
exports.OrderItemService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../shared/services/prisma.service");
let OrderItemService = class OrderItemService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    getAll() {
        return this.prismaService.orderItem.findMany();
    }
    getById(id) {
        return this.prismaService.orderItem.findUnique({
            where: { id },
        });
    }
    async create(orderItemsData) {
        try {
            const createdItems = await this.prismaService.orderItem.createMany({
                data: orderItemsData,
            });
            console.log('Create Items [0]', createdItems[0]);
            return createdItems[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    edit(id, orderItemData) {
        return this.prismaService.orderItem.update({
            where: { id },
            data: orderItemData,
        });
    }
    delete(id) {
        return this.prismaService.orderItem.delete({
            where: { id },
        });
    }
};
exports.OrderItemService = OrderItemService;
exports.OrderItemService = OrderItemService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderItemService);
//# sourceMappingURL=order-item.service.js.map