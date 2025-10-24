require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const todoRoutes = require("./route/todoRoutes")
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI; 

mongoose.connect(MONGODB_URI).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.error("Error connecting to MongoDB", err)
})

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from the express app") 
})

app.use("/api/todos", todoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})