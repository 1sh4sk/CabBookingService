const { Server } = require("socket.io");
const userModel = require("./models/user.model");
const captainModel = require("./models/captain.model");

let io;

function initializeSocket(server) {
    io = new Server(server, {
        cors: { 
            origin: "*", 
            methods: ["GET", "POST", "PUT", "DELETE"] 
        } // Allow all origins and common HTTP methods
    });
    
    console.log("Socket initialized ✅");

    io.on("connection", (socket) => {
       
        
        console.log(`User connected: ${socket.id}`);

        socket.on("message", async (data) => {
            console.log(`📩 Message from ${socket.id}:`, data);
            io.emit("message", data); // Broadcast message to all clients

            const { userId, userType } = data;
            console.log(`User ID: ${userId} joined ${userType}`);
            try {
            if (userType === "user") {
                await userModel.findByIdAndUpdate(userId, { socketId: socket.id });
            } else if (userType === "captain") {
                await captainModel.findByIdAndUpdate(userId, { socketId: socket.id });
            }
            } catch (error) {
            console.error("Error updating socket ID:", error);
            }
            


        });
        socket.on("update-location-captain", async (data) => {
            const { userId, location } = data;
        
            if (!location || !location.lat || !location.lng) {
                return socket.emit("error", { message: "Invalid location" });
            }
        
            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    lat: location.lat,  // ✅ Fixed typo (was `ltd`, now `lat`)
                    lng: location.lng
                }
            });
        });
        


        socket.on("disconnect", () => {
            console.log(`❌ User disconnected: ${socket.id}`);
        });
    });
} 

function sendMessageToSocketId(socketId, messageobj) {  //  `messageobj` is an object containing the event and data
    if (io) { 
        console.log("📡 Sending message...");
        io.to(socketId).emit(messageobj.event, messageobj.data);
        console.log(`✅ Message sent to ${socketId}: ${message}`);
    } else {
        console.error("❌ Error: Socket.io is not initialized.");
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };
