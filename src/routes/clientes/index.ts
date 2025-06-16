import { Router } from "express";
import { getClientes } from "./getClientes";
import { postCliente } from "./postCliente";

const app = Router();

app.get('/', getClientes);
app.post('/', postCliente);

export default app;