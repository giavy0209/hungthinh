import { NextFunction, Request, Response } from "express";

const auth = (req : Request,res : Response ,next : NextFunction) => {
    console.log(JSON.parse(req.headers.auth as string));
    
    next()
}

export default auth