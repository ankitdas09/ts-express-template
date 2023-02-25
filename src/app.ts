import express, { Express, NextFunction, Request, Response } from "express";
import configRoutes from "./route";
import configMiddleware from "./middleware";
import connectDB from "./db";
import mongoose from "mongoose";
import catchAsync from "./utils/catchAsync";
import AppError from "./utils/AppError";
const PORT = 8080;
const MONGO_URI = "8080";

const app: Express = express();

// connectDB(MONGO_URI);
configRoutes(app);
configMiddleware(app);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    const { status = 500, message = "Something went wrong." } = err;
    console.log({ error: true, message: message });
    return res.status(status).json({ error: true, message: message });
});

app.listen(PORT, function () {
    console.log("Listening on PORT", PORT);
});
