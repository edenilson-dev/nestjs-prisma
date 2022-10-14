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
exports.EstabelecimentoController = void 0;
const common_1 = require("@nestjs/common");
const estabelecimento_service_1 = require("./estabelecimento.service");
const create_estabelecimento_dto_1 = require("./dto/create-estabelecimento.dto");
const update_estabelecimento_dto_1 = require("./dto/update-estabelecimento.dto");
let EstabelecimentoController = class EstabelecimentoController {
    constructor(estabelecimentoService) {
        this.estabelecimentoService = estabelecimentoService;
    }
    create(createEstabelecimentoDto) {
        return this.estabelecimentoService.create(createEstabelecimentoDto);
    }
    findAll() {
        return this.estabelecimentoService.findAll();
    }
    findOne(id) {
        return this.estabelecimentoService.findOne(+id);
    }
    update(id, updateEstabelecimentoDto) {
        return this.estabelecimentoService.update(+id, updateEstabelecimentoDto);
    }
    remove(id) {
        return this.estabelecimentoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estabelecimento_dto_1.CreateEstabelecimentoDto]),
    __metadata("design:returntype", void 0)
], EstabelecimentoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstabelecimentoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstabelecimentoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estabelecimento_dto_1.UpdateEstabelecimentoDto]),
    __metadata("design:returntype", void 0)
], EstabelecimentoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstabelecimentoController.prototype, "remove", null);
EstabelecimentoController = __decorate([
    (0, common_1.Controller)('estabelecimento'),
    __metadata("design:paramtypes", [estabelecimento_service_1.EstabelecimentoService])
], EstabelecimentoController);
exports.EstabelecimentoController = EstabelecimentoController;
//# sourceMappingURL=estabelecimento.controller.js.map