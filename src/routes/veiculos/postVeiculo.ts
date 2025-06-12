import { Request, Response } from 'express';
import { QueryConfig } from 'pg';
import z from 'zod';
import postgresHelper from '../helpers/postgresHelper';

const bodySchema = z.object({
    modelo: z.string(),
    marca: z.string(),
    ano: z.number(),
    cor: z.string(),
    tag: z.string()
})

export async function postVeiculo(req: Request, res: Response) {

    const {
        modelo,
        marca,
        ano,
        cor,
        tag
    } = bodySchema.parse(req.body);

    const query: QueryConfig = {
        text: `
            INSERT INTO veiculos (modelo, marca, ano, cor, tag)
            VALUES($1, $2, $3, $4, $5)
        `,
        values: [modelo, marca, ano, cor, tag]
    }

    const veiculo = await postgresHelper.sql(query);

    if(veiculo.erro){
        console.error('Erro ao cadastrar veículo');
        throw new Error('Erro ao cadastrar veículo');
    }

    res.status(200).json({
        dados: 'Veículo cadastrado com sucésso'
    });
}