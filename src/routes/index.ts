import { Router } from "express";
import { getcheck } from "./check";


const router = Router();

router.get('/check', getcheck);

export default router;