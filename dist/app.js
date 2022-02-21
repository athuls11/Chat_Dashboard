"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const routes_1 = require("./routes/routes");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use('/', routes_1.router);
const PORT = Number(process.env.PORT) || 3000;
const server = app.listen(PORT, () => console.log(`Server is on Port ${PORT}`));
