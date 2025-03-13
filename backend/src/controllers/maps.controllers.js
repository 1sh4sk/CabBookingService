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
        const {origin,destination}=req.body;

        console.log(origin,destination);
        
const formattedOrigin = {
    lat: origin.location.latLng.latitude, 
    lng: origin.location.latLng.longitude
};

const formattedDestination = {
    lat: destination.location.latLng.latitude, 
    lng: destination.location.latLng.longitude
};
        
        const distance =await getDistanceTimeSer(formattedOrigin,formattedDestination)
        res.status(200).json(distance)
    } catch (error) {
        error.cause?res.status(error.cause.status).json({error:error.message}):res.status(404).json({ message: "Coordinates not found" })
    }
}

module.exports = { getCoordinates, getDistanceTime } 