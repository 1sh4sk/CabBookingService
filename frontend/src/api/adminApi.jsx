import api from "./api"

export const getCountApi = () => {
    const token = localStorage.getItem("token");

    return api.get("/admin/counts", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const adminLogin = (data) => {
    return api.post("/admin/login", data);
}

export const adminLogout = () => {
    const token = localStorage.getItem("token");

    return api.get("/admin/logout", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getUsersApi = () => {
    const token = localStorage.getItem("token");

    return api.get("/admin/users", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const deleteUserApi = (id) => {
    const token = localStorage.getItem("token");

    return api.delete(`/admin/usersdelete/`, {
        params: {
            id
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const getCaptainsApi = () => {
    const token = localStorage.getItem("token");

    return api.get("/admin/captains", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const deleteCaptain = (id) => {
    const token = localStorage.getItem("token");

    return api.delete(`/admin/captainsdelete/`, {
        params: {
            id
        },
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const getPendingCaptains = () => {
    const token = localStorage.getItem("token");

    return api.get("/admin/captaipending", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getCaptainApproval = (id) => {
    const token = localStorage.getItem("token");

    return api.put("/admin/captains/approve", null, {
        params: { id },
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}



