import api from "./api"

export const getUsersApi = () => {
    return api.get("/admin/users");
}

export const deleteUserApi = (id) => {
    return api.delete(`/admin/usersdelete/`, {
        params: {
            id
        }
    });
}

export const getCaptainsApi = () => {
    return api.get("/admin/captains")
}

export const deleteCaptain = (id) => {
    return api.delete(`/admin/usersdelete/`, {
        params: {
            id
        }
    });
}

export const getPendingCaptains = () => {
    return api.get("/admin/captaipending")
}



