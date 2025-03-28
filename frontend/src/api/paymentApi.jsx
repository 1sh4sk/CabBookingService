import api from "./api"

export const checkoutApi = (amount) => {
    const token = localStorage.getItem('token');

    return api.post("/payment/checkout", { amount }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getKey = () => {
    const token = localStorage.getItem('token');

    return api.get("/payment/getkey",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
}