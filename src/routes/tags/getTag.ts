import { Request, Response } from 'express';
import { QueryConfig } from 'pg';
import postgresHelper from '../../helpers/postgresHelper';

export async function getTags(req: Request, res: Response) {

    const query: QueryConfig = { 
        text: `
            SELECT * FROM tags
            ORDER BY id_tag DESC
        `,
        values: []
    }

    const tags = await postgresHelper.sql(query);

    if(tags.erro){
        console.error('Erro ao buscar tags');
        throw new Error ('Erro ao buscar tags');
    }

    res.status(200).json({
        dados: tags.resultado
    });
}