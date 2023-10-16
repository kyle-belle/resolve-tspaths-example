import config from "./config";
import { __PRODUCTION__ } from "@app/values";
import { errorHandler } from "./src/express/middleware/error";
import {server} from "./src/express";
import { wss } from "./src/websockets";
import { redis } from "@app/redis";

const PORT = config.SERVER_PORT || 5000;

server.get("/test", (req, res) => {
    res.status(200).json({message: "Hello World", remote: req.url});
});

// Error handling
server.use(errorHandler);

const httpServer = server.listen(PORT, () => {
    console.log("App listening on port: ", PORT);
});

process.on("SIGTERM", () => {
    wss.close();
    httpServer.close();
    redis.disconnect();
});