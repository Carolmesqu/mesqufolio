import { Projeto } from '@core';
import { Injectable } from '@nestjs/common';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoPrisma {
    constructor(private readonly prisma: PrismaProvider) {}

    //as any é um cast para que o typescript aceite o retorno, pois o prisma retorna um tipo diferente do que o typescript espera
    async obterTodos(): Promise<Projeto[]> {
        return this.prisma.projeto.findMany() as any;
    }

    async obterPorId(id: number): Promise<Projeto | null> {
        return this.prisma.projeto.findUnique({
            where: {
                id,
            },
            include: {
                tecnologias: true, 
            }
        }) as any;
    }
}
