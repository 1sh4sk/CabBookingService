const { validationResult } = require('express-validator');
const { createRide } = require('../services/ride.service');
const createRidee = async (req, res) => {    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }   
    try {
        const { user_id, pickup, destination, vehicleType } = req.body;
        const ride = await createRide({ user: req.user._id, pickup, destination, vehicleType });
        return res.status(201).json(ride);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
   }

   module.exports = { createRidee }   