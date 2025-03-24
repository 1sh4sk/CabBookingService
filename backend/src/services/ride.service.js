const { log } = require('console');
const RideModel = require('../models/ride.model');
const { getDistanceTimeSer } = require('./maps.service')
const crypto = require('crypto')

const getFare = async ({ pickupCoordinates, destinationCoordinates, vehicleType }) => {
    
    console.log("pickupCoordinates form getfare Service", pickupCoordinates);

   
    if (!pickupCoordinates || !destinationCoordinates) {
        throw new Error("pickupCoordinates and destinationCoordinates are required")
    }
    const distanceTime = await getDistanceTimeSer(pickupCoordinates, destinationCoordinates, "rideFare")



    const baseFare = 10; // base fare for all vehicles
    const farePerKm = {
        premier: 15,
        tripmateauto: 5,
        tripmatebike: 3,
        tripmatego: 10
    };
    const farePerMin = {
        premier: 6,
        tripmateauto: 2,
        tripmatebike: 1,
        tripmatego: 3
    };

    const { distanceMeters, duration } = distanceTime;
    const totalSeconds = parseInt(duration, 10);  // convert string to number (duration 2158s)


    if (vehicleType) {

        console.log("vehicleType    hvhg  ", vehicleType);
        const fare = Math.round(baseFare + (distanceMeters * farePerKm[vehicleType] / 1000) + (totalSeconds * farePerMin[vehicleType] / 60));

        return fare;
    }

    const fare = {
        tripmatego: Math.round(baseFare + (distanceMeters * farePerKm.tripmatego / 1000) + (totalSeconds * farePerMin.tripmatego / 60)),
        tripmateauto: Math.round(baseFare + (distanceMeters * farePerKm.tripmateauto / 1000) + (totalSeconds * farePerMin.tripmateauto / 60)),
        premier: Math.round(baseFare + (distanceMeters * farePerKm.premier / 1000) + (totalSeconds * farePerMin.premier / 60)),
        tripmatebike: Math.round(baseFare + (distanceMeters * farePerKm.tripmatebike / 1000) + (totalSeconds * farePerMin.tripmatebike / 60))
    };

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
    if (!fare) {
        throw new Error({ message: "Failed to calculate fare" });
    }
    console.log("fare form create ride", fare);

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
    }).populate('userModel').populate('captainModel').select('+otp');

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

const endRidee = async ({ rideId, captain }) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    const ride = await RideModel.findOne({
        _id: rideId,
        captain: captain._id
    }).populate('userModel').populate('captainModel')

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