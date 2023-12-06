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
exports.OrderItemController = void 0;
const common_1 = require("@nestjs/common");
const order_item_service_1 = require("./order-item.service");
const create_orderItem_dto_1 = require("./dtos/create-orderItem.dto");
const update_orderItem_dto_1 = require("./dtos/update-orderItem.dto");
let OrderItemController = class OrderItemController {
    constructor(ordersItemService) {
        this.ordersItemService = ordersItemService;
    }
    getAll() {
        return this.ordersItemService.getAll();
    }
    async getById(id) {
        const order = await this.ordersItemService.getById(id);
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        return order;
    }
    create(orderData) {
        return this.ordersItemService.create(orderData);
    }
    async edit(orderItemData, id) {
        const orderitem = await this.ordersItemService.getById(id);
        if (!orderitem)
            throw new common_1.NotFoundException('Category not found');
        else {
            await this.ordersItemService.edit(id, orderItemData);
            return { sucess: true };
        }
    }
    async delete(id) {
        const orderitem = await this.ordersItemService.getById(id);
        if (!orderitem)
            throw new common_1.NotFoundException('OrderItem does not exist');
        else {
            await this.ordersItemService.delete(id);
            return { sucess: true };
        }
    }
};
exports.OrderItemController = OrderItemController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], OrderItemController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderItemController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_orderItem_dto_1.CreateOrderItemDTO]),
    __metadata("design:returntype", void 0)
], OrderItemController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_orderItem_dto_1.UpdateOrderItemDTO, String]),
    __metadata("design:returntype", Promise)
], OrderItemController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id', new common_1.ParseUUIDPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrderItemController.prototype, "delete", null);
exports.OrderItemController = OrderItemController = __decorate([
    (0, common_1.Controller)('orderItems'),
    __metadata("design:paramtypes", [order_item_service_1.OrderItemService])
], OrderItemController);
//# sourceMappingURL=order-item.controller.js.map