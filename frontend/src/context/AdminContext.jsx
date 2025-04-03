import { createContext, useState } from "react";

export const adminDataContext = createContext();

const AdminContext = ({ children }) => {

    const [admin, setAdmin] = useState({});

    return <div>
        <adminDataContext.Provider value={{ admin, setAdmin }}>
            {children}
        </adminDataContext.Provider>
    </div>;
};

export default AdminContext;
