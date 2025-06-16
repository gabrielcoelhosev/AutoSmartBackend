import { Router } from "express";
import { getMatch } from "./getMatch";

const app = Router();

app.post('/', getMatch);

export default app;