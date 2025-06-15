import express, { json } from 'express';
import cors from 'cors';
import { env } from './env';
import router from './routes';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
    const ip = req.ip || req.connection.remoteAddress;
    const method = req.method;
    const url = req.originalUrl;
    const userAgent = req.headers['user-agent'];

    console.log(`[${timestamp}] - IP: ${ip} - Método: ${method} - URL: ${url} - User-Agent: ${userAgent}`);
    next();
});

app.use(express.json());
app.use(router);

const port = env.PORT;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
