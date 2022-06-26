import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello this is rooms endpoint");
})

router.get("/second", (req, res) => {
    res.send("Hello this is second rooms endpoint");
})

export default router;