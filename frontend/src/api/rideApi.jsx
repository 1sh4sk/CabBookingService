import api from "./api";

export const createRideApi = (rideData) => {
    const token = localStorage.getItem('token');

    return api.post(`/ride/create`, rideData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const confirmRideApi = (data) => {
    const token = localStorage.getItem('token');

    return api.post(`/ride/confirmride`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const rideStartApi = (rideId, otp) => {
    const token = localStorage.getItem('token');

    return api.get(`/ride/startride`, {
        params: {
            rideId,
            otp
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const finishRideApi = (rideId) => {
    const token = localStorage.getItem('token');

    return api.post(`/ride/endride`, { rideId }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}