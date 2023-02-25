import { Express, Router, Request, Response, NextFunction } from "express";
import User from "./user.model";
async function pingPong(req: Request, res: Response, next: NextFunction) {
    const body: { name: string } = req.body;

    const newUser = await User.findById({});
    if (!newUser) return res.sendStatus(404);

    return res.sendStatus(200);
}

export default { pingPong };
