import { __PRODUCTION__ } from "@app/values"
import { NextFunction, Request, Response } from "express"

export function errorHandler (err: Error, _req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
      return next(err)
    }
    
    res.status(500).json({message: err?.message, stack: !__PRODUCTION__?err?.stack:undefined, name: !__PRODUCTION__?err?.name:undefined});
  }
  