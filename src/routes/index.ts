import { Router } from "express";
import { getcheck } from "./check";
import veiculosRouter from "./veiculos"
import clientesRouter from "./clientes"
import tagsRouter from "./tags";
import matchRouter from "./match"

const router = Router();

router.get('/check', getcheck);

router.use('/veiculos', veiculosRouter);
router.use('/clientes',  clientesRouter);
router.use('/tags', tagsRouter);
router.use('/match',  matchRouter);

export default router;