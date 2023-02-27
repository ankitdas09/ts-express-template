import mongoose, { Document, HydratedDocument } from "mongoose";
import User, { IUser } from "./user.model";
import AppError from "../../utils/AppError";

async function createUser(props: IUser) {
    const newUser: HydratedDocument<IUser> = await User.create({
        ...props,
    });
    return newUser;
}

async function getUserByEmail(email: string) {
    const user = await User.findOne<IUser>({ email }).select("-__v -password");
    if (!user) throw new AppError(404, "User not found!");
    return user;
}

export default { getUserByEmail, createUser };
