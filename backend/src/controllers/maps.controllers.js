const { getAddressCoordinates, getDistanceTimeSer } = require("..//services/maps.service")
const { validationResult } = require("express-validator")




const getCoordinates = async (req, res, next) => {

    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    const { address } = req.query;
    try {


        const coorinates = await getAddressCoordinates(address);
        res.status(200).json(coorinates)
    } catch (error) {
        res.status(404).json({ message: "Coordinates not found" })
    }

};


const getDistanceTime = async (req, res, next) => {

    try {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }
        const {origin,destination}=req.query;
        const distance =await getDistanceTimeSer(origin,destination)
        res.status(200).json(distance)
    } catch (error) {
        res.status(404).json({ message: "Coordinates not found" })
    }
}

module.exports = { getCoordinates, getDistanceTime } 