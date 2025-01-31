"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const db_1 = require("./src/mognodb/db");
const post_ledger_1 = __importDefault(require("./src/routes/ledger/post.ledger"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/ledger', post_ledger_1.default);
(async () => {
    try {
        if ((await (0, db_1.dbConnection)())) {
            console.time(`⚡️ server started with 👍🏼 database connected http://localhost:${PORT} in `);
            app.listen(PORT, () => {
                console.timeEnd(`⚡️ server started with 👍🏼 database connected http://localhost:${PORT} in `);
            });
        }
    }
    catch (error) {
        console.timeEnd(`👎🏻 database or redis connection has some problem : ${JSON.stringify(error)}`);
    }
})();
process.on('unhandledRejection', function (reason, promise) {
    console.error('Unhandled rejection', { reason, promise });
});
//# sourceMappingURL=index.js.map