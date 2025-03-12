const axios = require("axios");

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

const getDistanceTimeSer = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error("Origin and Destination are Required");
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    console.log("kryy", process.env.GOOGLE_MAPS_API);
    console.log(origin);
    console.log(destination);
    
    
    
    // const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
    const url = `https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.post(url);

        console.log("API Response:", response.data);

        if (response.data.status === "OK") {
            const elements = response.data.rows[0].elements[0];

            if (elements.status === "ZERO_RESULTS") {
                throw new Error("No routes found");
            }

            return {
                distance: elements.distance.text, // e.g., "10 km"
                duration: elements.duration.text, // e.g., "15 mins" 
            };
        } else {
            throw new Error("Unable to fetch distance and time");
        }
    } catch (error) {
        console.error("Error fetching coordinates:", error.message); //Error fetching coordinates: Request failed with status code 400
        return null;
    }
}

module.exports = { getAddressCoordinates, getDistanceTimeSer };