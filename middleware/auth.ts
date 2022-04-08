import { NextFunction, Request, Response } from "express";
const string = 'zeJ3DA5oCYaZZ8arivJ6'
const auth = (req : Request,res : Response ,next : NextFunction) => {
    if(req.headers.authorization === string)next()
    else {
        res.status(401).send('dmm')
    }
    
}

export default auth