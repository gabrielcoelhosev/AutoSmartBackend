import { Request, Response } from "express";
import { QueryConfig } from "pg";
import z from 'zod';
import postgresHelper from "../../helpers/postgresHelper";

const bodyShcema = z.object({
    descricao: z.string()
})

export async function getMatch(req: Request, res: Response){
    
    const { descricao } = bodyShcema.parse(req.body)

    const query: QueryConfig = {
        text: `
            SELECT * 
            FROM clientes
            WHERE tag = $1
        `,
        values: [descricao]
    }

    console.log('chegou')

    const match = await postgresHelper.sql(query);

    if(match.erro){
        console.error('Erro ao buscar possíveis compradores');
        throw new Error('Erro ao buscar possíveis compradores')
    }

    res.status(200).json({
        dados: match.resultado
    })

}