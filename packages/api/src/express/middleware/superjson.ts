import { NextFunction, Request, Response } from "express";
import superjson from "superjson";

export function superJsonHandler(req: Request, _res: Response, next: NextFunction){
    try{
        if(req.body.superBody){
            // console.log(req.body, superjson.parse(req.body.superBody));
            req.body = superjson.parse(req.body.superBody);
        }
        next();
    }catch(e){
        next(e);
    }
}