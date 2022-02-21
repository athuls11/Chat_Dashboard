import { Server } from 'http';
import { config } from 'dotenv';

import api from "./api";
import express from "./servie/express"
import mongoose from './servie/mongoose';

config()
const app = express("/", api);

// db config --
const dbName = "chat_dashboard"
const dburl = process.env.DB_URL || `mongodb://0.0.0.0:27017/${dbName}`
mongoose(dburl);
// -----------


const PORT: Number = Number(process.env.PORT) || 3000
const server: Server = app.listen(PORT, () => 
    console.log(`Server is on Port ${PORT}`)
)