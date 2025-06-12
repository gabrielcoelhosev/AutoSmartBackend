import { Router } from "express";
import { getVeiculos } from "./getVeiculos";
import { postVeiculo } from "./postVeiculo";

const app = Router();

app.get('/', getVeiculos);
app.post('/', postVeiculo);

export default app;