import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//create
router.post("/", async (req, res) => {
    try {
        const newHotel = new Hotel(req.body);
        const savedHotel = await newHotel.save();

        return res.status(200).json(savedHotel);

    } catch (error) {
        return res.status(500).json(error);
    }
})

//update
router.put("/:id", async (req, res) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body });

        return res.status(200).json(updatedHotel);

    } catch (error) {
        return res.status(500).json(error);
    }
})

//delete
//get
//getAll

export default router;