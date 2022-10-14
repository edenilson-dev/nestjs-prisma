import { PrismaService } from '../prisma/prisma.service';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';
export declare class EstabelecimentoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createEstabelecimentoDto: CreateEstabelecimentoDto): string;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").tb_estabelecimentosaude[]>;
    findOne(id: number): string;
    update(id: number, updateEstabelecimentoDto: UpdateEstabelecimentoDto): string;
    remove(id: number): string;
}
