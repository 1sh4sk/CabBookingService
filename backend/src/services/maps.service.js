const axios = require("axios");
const captainModel = require("../models/captain.model");

const getAddressCoordinates = async (address) => {
    try {

        const apiKey = process.env.GOOGLE_MAPS_API;
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

        const response = await axios.get(url);

        if (response.data.status === "OK") {
            const location = response.data.results[0].geometry.location;
            return { lat: location.lat, lng: location.lng };
        } else {
            throw new Error("Invalid Address or API issue");
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error.message);
        return null;
    }

};


const getDistanceTimeSer = async (origin, destination, rideFare) => {

    try {

        if (!origin || !destination) {
            throw new Error("Origin and destination are required.", { cause: { status: 404 } });
        }

        const apiKey = process.env.GOOGLE_MAPS_API

        const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;



        // const requestBody = {
        //     origin: {
        //         location: {
        //             latLng: {
        //                 latitude: origin.lat,
        //                 longitude: origin.lng,
        //             },
        //         },
        //     },
        //     destination: {
        //         location: {
        //             latLng: {
        //                 latitude: destination.lat,
        //                 longitude: destination.lng,
        //             },
        //         },
        //     },
        //     travelMode: "DRIVE"
        // };


        const requestBody = {
            origin: {
                location: {
                    latLng: {
                        latitude: origin.lat,
                        longitude: origin.lng,
                    },
                },
            },
            destination: {
                location: {
                    latLng: {
                        latitude: destination.lat,
                        longitude: destination.lng,
                    },
                },
            },
            travelMode: "DRIVE"
        };




        const response = await axios.post(url, requestBody,
            {
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": apiKey,
                    "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline"
                }
            }

        );
        // console.log(response );



        if (!response.data) {
            console.error("Error: No response data received from Google API.");
            throw new Error("Google API did not return any data.");
        }

        if (!response.data.routes || response.data.routes.length === 0) {
            console.error("Error: No routes found in API response.");
            throw new Error("No routes available for the given locations.");
        }

        const route = response.data.routes[0];

        if (rideFare) return route;

        const totalSeconds = parseInt(route.duration);

        // Convert seconds into days, hours, and minutes
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
        const minutes = Math.round((totalSeconds % 3600) / 60);

        let durationText = "";
        if (days > 0) durationText += `${days} day${days > 1 ? "s" : ""} `;
        if (hours > 0) durationText += `${hours} hour${hours > 1 ? "s" : ""} `;
        if (minutes > 0) durationText += `${minutes} min${minutes > 1 ? "s" : ""}`;


        return {
            distance: `${route.distanceMeters / 1000} km`, // Convert meters to km
            duration: durationText.trim(), // Convert seconds to minutes

        };

    }
    catch (error) {
        console.error("Error fetching route data:", error);
        throw error;
    }
}

const getAutoSuggestionss = async (input) => {
    if (!input) {
        throw new Error("Query is required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status !== "OK") {
            console.error("Google Maps API Error:", response.data);
            throw new Error("Unable to fetch suggestions");
        }

        const predictions = response.data?.predictions;

        if (!predictions || predictions.length === 0) {
            throw new Error("No suggestions found");
        }
        console.log(predictions);

        return predictions.map(place => ({
            description: place.description,
            place_id: place.place_id,
            terms: place.terms,
        }));

    } catch (error) {
        console.error("Error fetching location:", error.message);
        throw error;
    }
};

const getCaptionInRadius = async (lat, lng, radius) => {
    //radius in km
    const captain = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[lat, lng], radius / 6371],
            },
        },
    });
    return captain;
}

module.exports = { getAddressCoordinates, getDistanceTimeSer, getAutoSuggestionss, getCaptionInRadius } 