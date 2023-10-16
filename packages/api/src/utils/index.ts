import { AxiosError } from "axios";
import { NextFunction, Request, Response } from "express";

export function handler(fn: (req: Request, res: Response, next: NextFunction) => unknown | Promise<unknown>){
    return async function(req: Request, res: Response, next: NextFunction){
        try{
            const output = await fn(req, res, next);

            if(!res.headersSent){
                res.json(output);
            }
        }catch(e){
            console.error(e)
            next(e);
        }
    }
}

export function getErrorMessage(e: unknown){
    if(typeof e === "object" && e !== null){
        if('response' in e){
            const {response, message} = e as AxiosError<{message: string}>;
            return `${response?.data?.message}\n${message}`;
        }

        if("message" in e){
            const {message} = e as Error;
            return message;
        }
    }

    return JSON.stringify(e);
}