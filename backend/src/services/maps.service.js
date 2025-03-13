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

// const getDistanceTimeSer = async (origin, destination) => {
//     console.log(origin);
//     console.log(destination);


//     if (!origin || !destination) {
//         throw new Error("Origin and Destination are Required");
//     }
//     const apiKey = process.env.GOOGLE_MAPS_API;

//     // const url = `https://routes.googleapis.com/directions/v2:computeRoutes?key=${apiKey}`;
//     const url = `https://maps.googleapis.com/maps/api/directions/json?key=${apiKey}`;


//     const requestBody = {
//         origin: {
//             location: {
//                 latLng: {
//                     latitude: origin.lat,
//                     longitude: origin.lng
//                 }
//             }
//         },
//         destination: {
//             location: {
//                 latLng: {
//                     latitude: destination.lat,
//                     longitude: destination.lng
//                 }
//             }
//         },
//         travelMode: "DRIVE"
//     };

//     try {
//         const response = await axios.post(url, requestBody, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         console.log("API Response:", response.data);

//         if (response.data.routes && response.data.routes.length > 0) {
//             const route = response.data.routes[0];
//             const leg = route.legs[0];

//             return {
//                 distance: leg.distance.text, // e.g., "10 km"
//                 duration: leg.duration.text, // e.g., "15 mins"
//             };
//         } else {
//             throw new Error("Unable to fetch distance and time");
//         }
//     } catch (error) {
//         console.error("Error fetching distance and time:", error.message);
//         return null;
//     }
// }
const getDistanceTimeSer = async (origin, destination) => {
    console.log("Origin:", origin);
    console.log("Destination:", destination);
    try {
        const getMinutesFromSeconds = (seconds) => {
            return Math.round(seconds / 60);
        };

        if (!origin || !destination) {
            throw new Error("Origin and destination are required.", { cause: { status: 404 } });
        }

        const apiKey = process.env.GOOGLE_MAPS_API

        const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;
        console.log("Dynamic Origin:", JSON.stringify(origin, null, 2));
        console.log("Dynamic Destination:", JSON.stringify(destination, null, 2));
        

        const response = await axios.post(url, { // ✅ Request Body (JSON)
            origin: { location: { latLng: { latitude: origin.lat, longitude: origin.lng } } },
            destination: { location: { latLng: { latitude: destination.lat, longitude: destination.lng } } },
            travelMode: "DRIVE",
            routingPreference: "TRAFFIC_AWARE"
        }, 
        { // ✅ Headers (Separate Object)
            headers: {
                "Content-Type": "application/json",
                "X-Goog-Api-Key": apiKey,
                "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline"
            }
        }
            //{
        //     origin: { location: { latLng: { latitude: origin.lat, longitude: origin.lng } } }, // Example origin (Bangalore)
        //     destination: { location: { latLng: { latitude: destination.lat, longitude: destination.lng } } }, // Example destination (Chennai)
        //     travelMode: "DRIVE",
        //     routingPreference: "TRAFFIC_AWARE"
        // }, {
        //     headers: {
        //         "Content-Type": "application/json",
        //         "X-Goog-Api-Key": apiKey,
        //        "X-Goog-FieldMask": "routes.duration,routes.distanceMeters,routes.legs,routes.polyline"

        //     }
        // }
        );

        // return response.data;
        console.log("API Response:", response.data);
        // ✅ Log full API response for debugging
        console.log("Full API Response:", JSON.stringify(response.data, null, 2));

        // ✅ Validate response before accessing `routes`
        if (!response.data) {
            console.error("Error: No response data received from Google API.");
            throw new Error("Google API did not return any data.");
        }

        if (!response.data.routes || response.data.routes.length === 0) {
            console.error("Error: No routes found in API response.");
            throw new Error("No routes available for the given locations.");
        }

        const route = response.data.routes[0];



        // const route = response.data.routes;
        console.log(route);
        return {
            distance: `${route.distanceMeters / 1000} km`, // Convert meters to km
            duration: `${getMinutesFromSeconds(parseInt(route.duration))}  mins`, // Convert seconds to minutes

        };

    }
    catch (error) {
        console.error("Error fetching route data:", error);
        throw error;
    }
}
// res.json(response.data);


// if (!origin || !destination) {
//     throw new Error("Origin and Destination are required");
// }

// const apiKey = process.env.GOOGLE_MAPS_API;
// const url = `https://routes.googleapis.com/directions/v2:computeRoutes`;

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

// try {
//     const response = await axios.post(url, requestBody, {
//         headers: {
//             "Content-Type": "application/json",
//             "X-Goog-Api-Key": apiKey,
//             "X-Goog-FieldMask": "routes.legs.distanceMeters,routes.legs.duration"
//         }
//     });

//     console.log("API Response:", response.data);

//     if (response.data.routes.length > 0 && response.data.routes[0].legs.length > 0) {
//         const leg = response.data.routes[0].legs[0];

//         return {
//             distance: `${leg.distanceMeters / 1000} km`, // Convert meters to km
//             duration: `${Math.round(leg.duration / 60)} mins`, // Convert seconds to minutes
//         };
//     } else {
//         throw new Error("Unable to fetch distance and time");
//     }
// } catch (error) {
//     console.error("Error fetching distance and time:", error.response?.data || error.message);
//     return null;
// }
// };

module.exports = { getAddressCoordinates, getDistanceTimeSer }