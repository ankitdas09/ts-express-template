import { Express, Router, Request, Response, NextFunction } from "express";
import catchAsync from "../../utils/catchAsync";
import controller from "./user.controller";

const router = Router();
router.get("/", catchAsync(controller.pingPong));

export default router;
