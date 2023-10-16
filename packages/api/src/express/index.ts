import express from "express";
import cors from "cors";
import { __PRODUCTION__ } from "@app/values";
import RedisStore from "connect-redis";
import { redis } from "@app/redis";
import session from "express-session";
import config from "../../config";
import cookieParser from "cookie-parser";
import { superJsonHandler } from "./middleware/superjson";

export const server = express();

let redisStore = new RedisStore({
    client: redis,
    prefix: "sessions:"
});

server.use(cors({
    credentials: true,
    methods: ['GET', 'POST', 'PATH', 'PUT', 'DELETE', 'OPTIONS'],
    origin: [
        'http://localhost:3000',
        'http://localhost:4173',
        'http://localhost:5173',
    ],
}));

export const cookieMiddleWare = cookieParser(config.COOKIE_SECRET)

server.use(cookieMiddleWare);

export const sessionMiddleware = session({store: redisStore, secret: config.SESSION_SECRET, saveUninitialized: false, name: config.SESSION_NAME, resave: false, cookie: {
    secure: __PRODUCTION__
}});

server.use(sessionMiddleware);


server.use(express.json(), superJsonHandler);
server.use(express.urlencoded({extended: true}));

// server.use((req, _res, next) => {
//     console.log("Req URL", req.path, req.url);
//     console.log("Req Body", req.body);
//     console.log("Req Params", req.params);
//     console.log("Req Query", req.query);
//     next();
// });

if(__PRODUCTION__){
    server.set("trust proxy", 1);
}