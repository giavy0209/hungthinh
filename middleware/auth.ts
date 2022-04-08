import { NextFunction, Request, Response } from "express";

const auth = (req : Request,res : Response ,next : NextFunction) => {
    console.log(typeof req.headers.auth);
    
    next()
}

export default auth