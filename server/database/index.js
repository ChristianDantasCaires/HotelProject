import mongoose from "mongoose";
import "dotenv/config";

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to database.");

    } catch (error) {
        throw error;
    }

    mongoose.connection.on("disconnected", () => console.log("Disconnected to MongoDB."));
}

connectDatabase();