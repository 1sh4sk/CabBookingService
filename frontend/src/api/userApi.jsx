import api from "./api";

export const registerUser = (data) => {
    return api.post('/user/register', data);
}

export const loginUser = (data) => {
    return api.post('/user/userlogin', data);
}

export const getUserProfile = () => {
    return api.get('/user/profile');
}

export const logoutUser = () => {
    const token = localStorage.getItem('token');
    return api.get('/user/logout',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
}

export const locationSuggestions = (inputLocation) => {
    const token = localStorage.getItem('token');
    console.log("input", inputLocation)
    return api.get(`/maps/get-suggestions?input=${inputLocation}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getFare = () => {

}