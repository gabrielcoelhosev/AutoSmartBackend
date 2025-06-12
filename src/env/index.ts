import 'dotenv/config';
import z from 'zod';

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    DATABASE_URL: z.coerce.string()
});

const _env = envSchema.safeParse(process.env);

if(_env.success === false){
    console.error('Erro ao encontrar variaveis de ambiente');
    throw new Error('Erro ao encontrar variaveis de ambiente');
}

export const env = _env.data;
