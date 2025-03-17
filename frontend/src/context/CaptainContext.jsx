import { createContext, useState } from "react";

export const captainDataContext = createContext();

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);


    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };

    const value = {
        captain,
        setCaptain,
        updateCaptain
    };

    return <captainDataContext.Provider value={value}>{children}</captainDataContext.Provider>;
};
export default CaptainContext;
