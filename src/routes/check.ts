import { Request, Response } from "express";

export async function getcheck(req: Request, res: Response) {
    
    res.status(200).json({
        dados: 'Api funcionando!'
    })
}