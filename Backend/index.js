import express from "express";
import './mongoDb.js';
import dotenv from 'dotenv';

dotenv.config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3002;

app.get("/",(req, res)=> {
    res.send("Api Is Working....")
})

app.get("/",(req, res)=> {
    res.send("No route Found ")
})


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV}`))