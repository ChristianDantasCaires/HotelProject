import Hotel from "../models/Hotel.js";

export async function createHotel(req, res, next) {
    try {
        const newHotel = new Hotel(req.body);
        const savedHotel = await newHotel.save();

        return res.status(200).json(savedHotel);

    } catch (error) {
        next(error);
    }
}

export async function updateHotel(req, res, next) {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )

        return res.status(200).json(updatedHotel);

    } catch (error) {
        next(error);
    }
}

export async function deleteHotel(req, res, next) {
    try {
        await Hotel.findByIdAndDelete(req.params.id);

        return res.status(200).json("Hotel has been deleted.");

    } catch (error) {
        next(error);
    }
}

export async function getHotel(req, res, next) {
    try {
        const hotel = await Hotel.findById(req.params.id);

        if (!hotel) {
            return res.status(400).json({ error: `Internal server error.` });
        }

        return res.status(200).json(hotel);

    } catch (error) {
        next(error);
    }
}

export async function getAllHotels(req, res, next) {
    try {
        const hotels = await Hotel.find();
        return res.status(200).json(hotels);

    } catch (error) {
        next(error);
    }
}

