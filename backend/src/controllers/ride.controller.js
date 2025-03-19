const { validationResult } = require('express-validator');
const { createRide, getFare, confirmRidee, startRidee, endRidee } = require('../services/ride.service');
const { getAddressCoordinates, getCaptionInRadius } = require('../services/maps.service');
const RideModel = require('../models/ride.model');


const createRidee = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const { pickup, destination, vehicleType } = req.body;
        const pickupCoordinates = await getAddressCoordinates(pickup);
        console.log("pickupCoordinates", pickupCoordinates);
        const destinationCoordinates = await getAddressCoordinates(destination);
        console.log("destinationCoordinates", destinationCoordinates);
        const ride = await createRide({ user: req.user._id, pickup, destination, pickupCoordinates, destinationCoordinates, vehicleType });

        const captainRadius = await getCaptionInRadius(pickupCoordinates.lat, pickupCoordinates.lng, 3);  // 3 KM

        ride.otp = "";
        const rideWithUser = await RideModel.findOne({ _id: ride._id }).populate('user')
        captainRadius.map(captain => {
            sendMessageToSocketId(captain.socketId, { event: "new-ride", data: rideWithUser })
        });

        return res.status(201).json(ride);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getFaree = async (req, res) => {
    try {
        const { pickupCoordinates, destinationCoordinates } = req.query;
        console.log(pickupCoordinates, destinationCoordinates)
        const fare = await getFare(pickupCoordinates, destinationCoordinates)
        res.status(200).json(fare)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

const confirmRide = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const { rideId } = req.body
        const ride = await confirmRidee({ rideId, captain: req.captain });
        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })

        res.status(200).json(ride)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}
const startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, otp } = req.query;

    try {
        const ride = await startRidee({
            rideId,
            otp,
            captain: req.captain
        });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        });

        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const endRide = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { rideId } = req.query;
    try {
        const ride = await startRidee({
            rideId,

            captain: req.captain
        });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        });

        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = { createRidee, getFaree, confirmRide, startRide, endRide }   