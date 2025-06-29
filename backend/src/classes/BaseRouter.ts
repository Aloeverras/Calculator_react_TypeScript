import { Router } from "express";
import BaseController from "./BaseController";

const router : Router = Router();

router.get('/', BaseController.getBaseMessage);

router.get('/health', BaseController.getHealthCheck);

export default router;