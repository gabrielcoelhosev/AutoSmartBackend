import { Request, Response } from 'express';
import { QueryConfig } from 'pg';
import postgresHelper from '../helpers/postgresHelper';

export async function getClientes(req: Request, res: Response) {

    const query: QueryConfig = {
        text: `
            SELECT * FROM clientes
        `
    }

    const clientes = await postgresHelper.sql(query);

    if (clientes.erro) {
        throw new Error('Erro ao buscar clientes');
    }

    res.status(200).json({
        dados: clientes.resultado
    })
}