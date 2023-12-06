"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const cors = require("cors");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tours_module_1 = require("./tours/tours.module");
const config_1 = require("@nestjs/config");
const categories_module_1 = require("./categories/categories.module");
const tags_module_1 = require("./tags/tags.module");
const order_item_module_1 = require("./order-items/order-item.module");
const orders_module_1 = require("./orders/orders.module");
const clients_module_1 = require("./clients/clients.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(cors()).forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL,
        });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            tours_module_1.ToursModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            categories_module_1.CategoriesModule,
            tags_module_1.TagsModule,
            order_item_module_1.OrderItemModule,
            orders_module_1.OrdersModule,
            clients_module_1.ClientsModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../../', 'client', 'build'),
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map