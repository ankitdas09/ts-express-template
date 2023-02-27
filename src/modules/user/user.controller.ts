import { Express, Router, Request, Response, NextFunction } from "express";
import User from "./user.model";
import { ICreateUserRequestSchema } from "./user.schema";
import services from "./user.service";

async function createUser(
    req: Request<{}, {}, ICreateUserRequestSchema>,
    res: Response,
    next: NextFunction
) {
    const newUser = await services.createUser({
        ...req.body,
    });
    return res.status(200).json(newUser);
}

export default { createUser };
