const RideModel = require('../models/ride.model');
const { getDistanceTimeSer } = require('./maps.service')
const crypto = require('crypto')

const getFare = async ({ pickupCoordinates, destinationCoordinates, vehicleType }) => {
    if (!pickupCoordinates || !destinationCoordinates) {
        throw new Error("pickupCoordinates and destinationCoordinates are required")
    }

    const distanceTime = await getDistanceTimeSer(pickupCoordinates, destinationCoordinates, "rideFare")



    const baseFare = 10; // base fare for all vehicles
    const farePerKm = {
        car: 10,
        auto: 5,
        motorcycle: 3
    };
    const farePerMin = {
        car: 5,
        auto: 2,
        motorcycle: 1,
    };

    const { distanceMeters, duration } = distanceTime;
    const totalSeconds = parseInt(duration, 10);


    if (!farePerKm[vehicleType] || !farePerMin[vehicleType]) {
        throw new Error("Invalid vehicle type");
    }

    const fare = baseFare + (farePerKm[vehicleType] * distanceMeters / 1000) + (farePerMin[vehicleType] * totalSeconds / 60);
    console.log("fare", fare);
    return fare;
}

const getOtp = (num) => {


    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;

    }
    return generateOtp(num);
}



const createRide = async ({ user, pickup, destination, pickupCoordinates, destinationCoordinates, vehicleType }) => {
    if (!user || !pickupCoordinates || !destinationCoordinates || !vehicleType) {
        throw new Error("user, pickup, destination and vehicleType are required")
    }
    const fare = await getFare({ pickupCoordinates, destinationCoordinates, vehicleType });
    console.log("fare", fare);

    const ride = RideModel.create({
        user,
        pickup,
        destination,
        fare,
        otp: getOtp(6)

    })
    return ride;
}

const confirmRidee = async (rideId, captain) => {
    if (!rideId) throw new Error("Ride id is required");
    await RideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'accepted',
        captain: captain._id
    })
    const ride = await RideModel.findOne({ _id: rideId }).populate('user').populate('captain').select('+otp')
    if (!ride) throw new Error("Ride is not found");

    return ride
}

const startRidee = async ({ rideId, otp, captain }) => {
    if (!rideId || !otp) {
        throw new Error('Ride id and OTP are required');
    }

    const ride = await RideModel.findOne({
        _id: rideId
    }).populate('user').populate('captain').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'accepted') {
        throw new Error('Ride not accepted');
    }

    if (ride.otp !== otp) {
        throw new Error('Invalid OTP');
    }

    await RideModel.findOneAndUpdate(
        { _id: rideId },
        { status: 'ongoing' }
    );

    sendMessageToSocketId(ride.user.socketId, {
        event: 'ride-started',
        data: ride
    });

}

const endRidee = async ({ rideId,  captain} ) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    const ride = await RideModel.findOne({
        _id: rideId,
        captain:captain._id
    }).populate('user').populate('captain').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'ongoing') {
        throw new Error('Ride not ongoing');
    }

    await RideModel.findOneAndUpdate(
        { _id: rideId },
        { status: 'completed' }
    );

}
module.exports = {
    createRide, getFare, confirmRidee, startRidee, endRidee
}   