import api from "./api"

export const getCountApi = () => {
    return api.get("/admin/counts");
}

export const adminLogin = (data) => {
    return api.post("/admin/login", data);
}

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
    return api.delete(`/admin/captainsdelete/`, {
        params: {
            id
        }
    });
}

export const getPendingCaptains = () => {
    return api.get("/admin/captaipending")
}

export const getCaptainApproval = (id) => {
    console.log(id)
    return api.put("/admin/captains/approve", null, { params: { id } })
}



