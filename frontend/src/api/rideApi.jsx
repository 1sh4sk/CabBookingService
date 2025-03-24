import api from "./api";

export const createRideApi = (rideData) => {
    const token = localStorage.getItem('token');

    return api.post(`/ride/create`, rideData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const confirmRideApi = (rideId) => {
    const token = localStorage.getItem('token');

    return api.post(`/ride/confirmride`, rideId, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}