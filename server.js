const express = require("express");
const app = express();
const cors = require("cors");
const destinationRoutes = require("./routes/destinationRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDatabase = require("./database/database");

require("dotenv").config({
  path: "config/.env",
});
const port = process.env.PORT;

app.use(
    cors(
      {
      origin:process.env.API_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
       allowedHeaders: "Content-Type, Authorization",
      credentials: true,
    }
  )
  );

app.use(express.json());

app.use("/api/destination", destinationRoutes);
app.use("/api/user", userRoutes);

app.use("/", (req, res) => {
    res.send("Hello 4");
  });

process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("shutting down the server for uncaught exception");
});
const server = app.listen(port, () => {
  console.log(`server is running on the port number ${port}`);
});

connectDatabase();

process.on("unhandledRejection", (err) => {
  console.log(`hutting down the server for ${err.message}`);
  console.log("shutting down the server for unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
