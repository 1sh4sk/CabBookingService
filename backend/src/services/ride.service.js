const RideModel = require('../models/ride.model');
const { getDistanceTimeSer } = require('./maps.service')



const getFare = async ({ pickup, destination }) => {
    if (!pickup || !destination) {
        throw new Error("pickup and destination are required")
    }

    const distanceTime = await getDistanceTimeSer(pickup, destination)

    const baseFare = 50; // base fare in currency units
    const farePerKm = {
        car: 10,
        auto: 5,
        motorcycle: 3
    };
    const farePerMin = {
        car: 5,
        auto: 2,
        motorcycle: 1
    };

    const { distance, duration } = distanceTime;
    const vehicleType = 'car'; // this should be dynamically determined based on user input

    if (!farePerKm[vehicleType] || !farePerMin[vehicleType]) {
        throw new Error("Invalid vehicle type");
    }

    const fare = baseFare + (farePerKm[vehicleType] * distance) + (farePerMin[vehicleType] * duration);
    return fare;
}
const createRide = async ({ user, pickup, destination, vehicleType }) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error("user, pickup, destination and vehicleType are required")
    }
    const fare = await getFare({ pickup, destination });
    const ride = RideModel.create({
        user,
        pickup,
        destination,
        fare:fare[vehicleType]
       
    })
    return ride;
}

module.exports = {
    createRide
}   