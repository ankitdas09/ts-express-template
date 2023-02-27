import { AnyZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
import AppError from "./AppError";

function validate(schema: AnyZodObject) {
    return async function (req: Request, res: Response, next: NextFunction) {
        try {
            await schema.parseAsync(req.body);
            return next();
        } catch (error) {
            return next(new AppError(500, "Invalid Request Body"));
        }
    };
}
export default validate;
