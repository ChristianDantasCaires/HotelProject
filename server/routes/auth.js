import express from "express";
import { register } from "../controllers/auth.js";

const router = express.Router();

router.get("/second", register);

export default router;