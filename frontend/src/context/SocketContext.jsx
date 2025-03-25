import { createContext, useEffect } from "react";
import { io } from 'socket.io-client';

export const SocketContext = createContext();

const socket = io(`${import.meta.env.VITE_BASE_URL}`);

const SocketContextProvider = ({ children }) => {

    useEffect(() => {
        //basic connection
        socket.on('connect', () => {
            console.log('Connected to server', socket.id);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

    }, []);




    const sendMessage = (eventName, message) => {
        socket.emit(eventName, message);
    }

    const receiveMessage = (eventName, callback) => {
        console.log("receive message")
        socket.on(eventName, callback);
    }

    return <SocketContext.Provider value={{ sendMessage, receiveMessage, socket }}>
        {children}
    </SocketContext.Provider>;
};
export default SocketContextProvider;
