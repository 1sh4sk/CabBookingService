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

            // console.log(userId, "location:", location);

            if (!location || !location.ltd || !location.lng) {
                return socket.emit("error", { message: "Invalid location" });
            }




            // await captainModel.findByIdAndUpdate(userId, {
            //     location: {
            //         lng: location.lng,
            //         ltd: location.ltd  // ✅ Fixed typo (was `ltd`, now `lat`)
            //     }
            // });


            await captainModel.findByIdAndUpdate(userId, {
                location: {
                    type: "Point",
                    coordinates: [location.lng, location.ltd]  // Longitude first, then Latitude
                }
            });
        });



        socket.on("disconnect", () => {
            console.log(`❌ User disconnected: ${socket.id}`);
        });
    });
}

function sendMessageToSocketId(socketId, messageobj) {
    // if (io) {
    //     console.log("📡 Sending message...");
    //     io.to(socketId).emit(messageobj.event, messageobj.data);
    //     console.log(`✅ Message sent to ${socketId}: ${messageobj}`);
    // } else {
    //     console.error("❌ Error: Socket.io is not initialized.");
    // }

    if (!io) {
        console.error("❌ Error: Socket.io is not initialized.");
        return;
    }

    if (!socketId || typeof socketId !== "string") {
        console.error("❌ Error: Invalid socket ID.");
        return;
    }

    console.log("📡 Sending message...");

    io.to(socketId).emit(messageobj.event, messageobj.data);

    console.log(`✅ Message sent to ${socketId}: ${JSON.stringify(messageobj, null, 2)}`);
}

module.exports = { initializeSocket, sendMessageToSocketId };
