import mongoose from "mongoose";

async function connectDB(connectionUri: string) {
    try {
        await mongoose.connect(connectionUri);
        console.log("Database connected.");
    } catch (error) {
        // console.log(error);
        console.log("DB Connection error");
        process.exit(1);
    }
}
export default connectDB;
