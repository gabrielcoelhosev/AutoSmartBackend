import express, { json } from 'express';
import { env } from './env';
import router from './routes';

const app = express();

app.use(express.json());
app.use(router);

const port = env.PORT;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
