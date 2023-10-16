import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodObject } from "zod";

export function validateSchema(schema: ZodObject<{body?: AnyZodObject, query?: AnyZodObject, params?: AnyZodObject}>){
    return (
        async (req: Request, _res: Response, next: NextFunction) => {
          try {
            const {body, query, params} = await schema.parseAsync({
              body: req.body,
              query: req.query,
              params: req.params,
            });
            
            req.body = {...req.body, ...(body || {})};
            req.query = {...req.query, ...(query || {})};
            req.params = {...req.params, ...(params || {})};

            return next();
          } catch (error) {
            return next(error);
          }
      }
    );
}