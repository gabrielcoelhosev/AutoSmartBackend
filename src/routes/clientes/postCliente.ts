import { Request, Response } from "express";
import { QueryConfig } from "pg";
import z from 'zod';
import postgresHelper from "../helpers/postgresHelper";

const bodySchema = z.object({
    nome: z.string(),
    cpf: z.string(),
    tag: z.string(),
    data_nascimento: z.coerce.date()
});

export async function postCliente(req: Request, res: Response) {
    const {
        nome,
        cpf,
        tag,
        data_nascimento
    } = bodySchema.parse(req.body);

    const query: QueryConfig = {
        text: `
            INSERT INTO clientes 
            (nome, cpf, tag, data_nascimento)
            VALUES ($1, $2, $3, $4)
        `,
        values: [nome, cpf, tag, data_nascimento]
    }

    const novoCliente = await postgresHelper.sql(query);

    if (novoCliente.erro) {
        console.log('Erro ao cadastrar cliente');
        throw new Error('Erro ao cadastrar cliente');
    }

    res.status(201).json({
        dados: `Cliente ${nome} cadastrado com sucésso!`
    })
}