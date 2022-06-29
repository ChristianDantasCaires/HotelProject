import User from "../models/User.js";

export async function register(req, res, next) {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        await newUser.save();

        return res.status(200).send("User has been created.");
    } catch (error) {
        next(error);
    }
}