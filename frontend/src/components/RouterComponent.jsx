import { Routes, Route } from "react-router";
import { UserHome, UserLogin } from "../pages/user";
import App from "../App";
import Home from "../pages/user/Home";

const RouterComponent = () => {
    return <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
        </Routes>
    </div>;
};
export default RouterComponent;
