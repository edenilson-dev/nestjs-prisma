"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstabelecimentoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_estabelecimento_dto_1 = require("./create-estabelecimento.dto");
class UpdateEstabelecimentoDto extends (0, mapped_types_1.PartialType)(create_estabelecimento_dto_1.CreateEstabelecimentoDto) {
}
exports.UpdateEstabelecimentoDto = UpdateEstabelecimentoDto;
//# sourceMappingURL=update-estabelecimento.dto.js.map