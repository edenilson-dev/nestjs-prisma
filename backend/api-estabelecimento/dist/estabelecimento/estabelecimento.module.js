"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstabelecimentoModule = void 0;
const common_1 = require("@nestjs/common");
const estabelecimento_service_1 = require("./estabelecimento.service");
const estabelecimento_controller_1 = require("./estabelecimento.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let EstabelecimentoModule = class EstabelecimentoModule {
};
EstabelecimentoModule = __decorate([
    (0, common_1.Module)({
        controllers: [estabelecimento_controller_1.EstabelecimentoController],
        providers: [estabelecimento_service_1.EstabelecimentoService, prisma_service_1.PrismaService],
    })
], EstabelecimentoModule);
exports.EstabelecimentoModule = EstabelecimentoModule;
//# sourceMappingURL=estabelecimento.module.js.map