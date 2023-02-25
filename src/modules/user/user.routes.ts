import { Express, Router, Request, Response, NextFunction } from "express";
import catchAsync from "../../utils/catchAsync";
import UserController from "./user.controller";

const router = Router();
router.get("/", catchAsync(UserController.PingPong));

export default router;
