import { Express, Router, Request, Response, NextFunction } from "express";
import catchAsync from "../../utils/catchAsync";
import controller from "./user.controller";
import validate from "../../utils/validateSchema";
import { createUserRequestSchema } from "./user.schema";
const router = Router();

router.post("/", validate(createUserRequestSchema), catchAsync(controller.createUser));

export default router;
