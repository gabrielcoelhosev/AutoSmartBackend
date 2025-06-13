import express, { json } from 'express';
import cors from 'cors';
import { env } from './env';
import router from './routes';

const app = express();

app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(express.json());
app.use(router);

const port = env.PORT;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
