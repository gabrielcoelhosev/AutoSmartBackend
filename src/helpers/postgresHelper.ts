import { Pool, QueryConfig } from 'pg';
import { env } from '../env'

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  max: 6,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  application_name: 'api_trez',
});

interface SqlResult {
  erro: boolean;
  resultado: any;
}

async function sql(query: QueryConfig): Promise<SqlResult> {
  try {
    const result = await pool.query(query);
    return { erro: false, resultado: result.rows };
  } catch (err) {
    console.error('Erro ao executar query:', err);
    return { erro: true, resultado: null };
  }
}

export default {
  sql,
};
