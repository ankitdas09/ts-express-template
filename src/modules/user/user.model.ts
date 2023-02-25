import mongoose, { Model } from "mongoose";

interface IUser {
    name: string;
    email: string;
    avatar?: string;
}

// methods
interface IUserMethods {
    verifyJWT(next: string): number;
}

// statics
// interface UserModel extends Model<IUser, {}, IUserMethods> {
//     fullName: Promise<string>;
// }

const UserSchema = new mongoose.Schema<IUser, {}, IUserMethods>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
});

UserSchema.methods.verifyJWT = function (next: string) {
    return next.length;
};

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
