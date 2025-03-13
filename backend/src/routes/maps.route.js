const {Router}=require('express');
const { userValidateToken } = require('../middleware/tokengen');
const {getCoordinates,getDistanceTime} = require('../controllers/maps.controllers');
const {query,body}=require("express-validator")
const router =Router();


router.get('/get-coordinates',
    query('address').isString().isLength({min:3})
    ,userValidateToken,getCoordinates)


    // router.post('/get-distance-time',
    //     query('origin').isString().isLength({min:3}),
    //     query('destination').isString().isLength({min:3}),
    //     userValidateToken,getDistanceTime )

    router.post('/get-distance-time',
        userValidateToken,getDistanceTime )

    module.exports =router