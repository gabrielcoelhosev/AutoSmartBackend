import { Request, Response } from 'express';
import { QueryConfig } from 'pg';
import postgresHelper from '../../helpers/postgresHelper';


export async function getVeiculos(req: Request, res: Response) {


    const query: QueryConfig = {
        text: `
            SELECT * FROM veiculos
            ORDER BY id_veiculo DESC
        `,
    }

    const veiculos = await postgresHelper.sql(query);

    if(veiculos.erro) {
        console.error('Erro ao buscar veículos');
        throw new Error('Erro ao buscar veículos');
    }

    res.status(200).json({
        dados: veiculos.resultado
    })
}