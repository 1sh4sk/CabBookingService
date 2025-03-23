const captainModel = require("../models/captain.model");

const createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity,vehiclename, vehicletype }) => {
    if (!firstname || !password || !email || !color || !plate || !capacity || !vehicletype || !vehiclename) {
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
            vehiclename,
            color,
            plate,
            capacity,
            vehicletype
        }
    })
    return captain
}


module.exports = { createCaptain };