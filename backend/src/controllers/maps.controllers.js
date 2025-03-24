const { getAddressCoordinates, getDistanceTimeSer, getAutoSuggestionss } = require("..//services/maps.service")
const { validationResult } = require("express-validator")


// get lat & lng 

const getCoordinates = async (req, res) => {

    const error = validationResult(req)

    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    const { address } = req.query;
    try {

        const coorinates = await getAddressCoordinates(address);   // service
        res.status(200).json(coorinates)
    } catch (error) {
        res.status(404).json({ message: "Coordinates not found" })
    }

};

// get distance and duration  point to point
const getDistanceTime = async (req, res) => {

    try {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }
        const { origin, destination } = req.body;
        console.log(origin, destination);
        const originCoordinates = await getAddressCoordinates(origin);  // service
        console.log("originCoordinates", originCoordinates);
        const destinationCoordinates = await getAddressCoordinates(destination);  // service
        console.log("destinationCoordinates", destinationCoordinates);

        const distance = await getDistanceTimeSer(originCoordinates, destinationCoordinates)  // service
        res.status(200).json(distance)
    } catch (error) {
        error.cause ? res.status(error.cause.status).json({ error: error.message }) : res.status(404).json({ message: "Coordinates not found" })
    }
}

// auto suggestion
const getAutoSuggestions = async (req, res, next) => {
    try {
        const error = validationResult(req)

        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() })
        }
        const { input } = req.query;
        const suggestion = await getAutoSuggestionss(input); //service
        res.status(200).json(suggestion)

    } catch (error) {
        error.cause ? res.status(error.cause.status).json({ error: error.message }) : res.status(500).json({ message: "internal server error" })
    }

}
module.exports = { getCoordinates, getDistanceTime, getAutoSuggestions } 