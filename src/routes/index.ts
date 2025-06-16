import { Router } from "express";
import { getcheck } from "./check";
import veiculosRouter from "./veiculos"
import clientesRouter from "./clientes"

const router = Router();

router.get('/check', getcheck);

router.use('/veiculos', veiculosRouter)
router.use('/clientes',  clientesRouter)

export default router;