import { Router } from "express";
import { getcheck } from "./check";
import veiculosRouter from "./veiculos"

const router = Router();

router.get('/check', getcheck);

router.use('/veiculos', veiculosRouter)

export default router;