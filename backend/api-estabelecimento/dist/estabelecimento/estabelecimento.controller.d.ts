import { EstabelecimentoService } from './estabelecimento.service';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';
export declare class EstabelecimentoController {
    private readonly estabelecimentoService;
    constructor(estabelecimentoService: EstabelecimentoService);
    create(createEstabelecimentoDto: CreateEstabelecimentoDto): string;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").tb_estabelecimentosaude[]>;
    findOne(id: string): string;
    update(id: string, updateEstabelecimentoDto: UpdateEstabelecimentoDto): string;
    remove(id: string): string;
}
