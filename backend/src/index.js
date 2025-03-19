require("dotenv").config();

const exp = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");

const mongo = require("./config/mongodb.connection");
const userRouter = require("./routes/user.routes");
const captainRouter = require("./routes/captain.routes");
const mapsRouter = require("./routes/maps.route");
const rideRouter = require("./routes/ride.routes");
const { initializeSocket } = require("./socket"); // Import socket initialization function

const app = exp();
mongo();

// Middleware
app.use(cors());
app.use(exp.json());
app.use(cookieParser());
app.use(exp.urlencoded({ extended: true })); // Allows nested objects in input

// Routes
app.use("/user", userRouter);
app.use("/captain", captainRouter);
app.use("/maps", mapsRouter);
app.use("/ride", rideRouter);

// Create HTTP server and pass the Express app
const server = http.createServer(app);

// Initialize Socket.io (Now handled inside `socket.js`)
initializeSocket(server);  

// Start the server
const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
