import { Express, Router, Request, Response, NextFunction } from "express";
async function PingPong(req: Request, res: Response, next: NextFunction) {
    return res.sendStatus(200);
}

export default { PingPong };
