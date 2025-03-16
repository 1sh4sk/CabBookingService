const captainModel = require("../models/captain.model");

const createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity, vehicletype }) => {
    if (!firstname || !password || !email || !color || !plate || !capacity || !vehicletype) {
        throw new Error('All fields are required')
    }
    const captain = captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicletype
        }
    })
    return captain
}


module.exports = { createCaptain };