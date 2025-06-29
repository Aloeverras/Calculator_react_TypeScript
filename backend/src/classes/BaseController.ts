import { Request, Response } from "express";

class BaseController {

    public static getBaseMessage(req : Request, res : Response) : void {
        const message : string = "Bienvenue sur l'API de calculatrice d'Aloès !";
        res.status(200).json({message})
    };

    public static getHealthCheck(req: Request, res: Response): void {
        res.status(200).json({ status: "UP", timestamp: new Date().toISOString() });
    };
}

export default BaseController;