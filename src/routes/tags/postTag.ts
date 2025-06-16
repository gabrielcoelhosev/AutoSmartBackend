import { Request, Response } from "express";
import { QueryConfig } from "pg";
import z from 'zod';
import postgresHelper from "../../helpers/postgresHelper";

const bodyShcema = z.object({
    descricao: z.string()
})

export async function postTag(req: Request, res: Response) {
    const { descricao } = bodyShcema.parse(req.body);    

    const query: QueryConfig = {
        text: `
            INSERT INTO tags (descricao)
            VALUES ($1)
        `,
        values: [descricao]
    }

    const novaTag = await postgresHelper.sql(query);

    if ( novaTag.erro ) {
        console.error('Erro ao cadastrar tag');
        throw new Error('Erro ao cadastrar tag');
    }

    res.status(201).json({
        dados: `Tag ${descricao} cadastrada com sucésso`
    });
}
