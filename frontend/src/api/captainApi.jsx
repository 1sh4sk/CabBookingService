import api from "./api";

export const registerCaptain = (data) => {
    return api.post('/captain/register', data);
}

export const loginCaptain = (data) => {
    return api.post('/captain/login', data);
}

export const getCaptainProfile = () => {
    return api.get('/captain/profile');
}

export const logoutCaptain = () => {
    const token = localStorage.getItem('token');
    return api.get('/captain/logout',
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
}


export const captainProfile = () => {
    const token = localStorage.getItem('token');
    return api.get('/captain/profile', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}