import express from "express";
import "./database/index.js";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

const app = express();

//middlewares
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);



app.get("/", (req, res) => {
    res.json({ hi: "hello" });
})

app.listen(5000, () => console.log("Server is running..."));