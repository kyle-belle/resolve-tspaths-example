import { sessionMiddleware } from "../express";
import config from "../../config";
import {WebSocketServer} from "ws";
import { getErrorMessage } from "../utils";

export const wss = new WebSocketServer({
    port: Number(config.WEBSOCKET_PORT),
    verifyClient: (info, next) => {
        sessionMiddleware(info.req as any, {} as any, (err) => {
            if(err){
                console.error("Error verifying websocket client", getErrorMessage(err));
                next(false, 500, getErrorMessage(err));
            }else{
                next(true);
            }
        })
    }
});