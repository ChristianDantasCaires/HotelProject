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
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        return res.status(200).json(updatedHotel);

    } catch (error) {
        return res.status(500).json(error);
    }
})

//delete
router.delete("/:id", async (req, res) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);

        return res.status(200).json("Hotel has been deleted.");

    } catch (error) {
        return res.status(500).json(error);
    }
})

//get
router.get("/:id", async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id);

        if (!hotel) {
            return res.status(400).json({ error: `Internal server error.` });
        }

        return res.status(200).json(hotel);

    } catch (error) {
        return res.status(500).json(error);
    }
})

//getAll
router.get("/", async (req, res) => {
    try {
        const hotels = await Hotel.find();

        return res.status(200).json(hotels);

    } catch (error) {
        return res.status(500).json(error);
    }
})

export default router;