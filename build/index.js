"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const db_1 = require("./src/mognodb/db");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(PORT, async () => {
    console.log("server is running on " + `${PORT}`);
    await db_1.dbConnection;
});
process.on('unhandledRejection', function (reason, promise) {
    console.error('Unhandled rejection', { reason, promise });
});
//# sourceMappingURL=index.js.map