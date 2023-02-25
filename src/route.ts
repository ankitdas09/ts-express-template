import { Express } from "express";
import userRoutes from "./modules/user/user.routes";

function configRoutes(app: Express) {
    app.use("/api/user", userRoutes);
}

export default configRoutes;
