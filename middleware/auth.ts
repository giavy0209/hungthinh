import { NextFunction, Request, Response } from "express";

const auth = (req : Request,res : Response ,next : NextFunction) => {
    console.log(req.headers.authorization);
    
    next()
}

export default auth