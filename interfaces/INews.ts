import {model, Schema, Types} from 'mongoose'
export default interface INews {
    title : string,
    meta : string,
    thumbnail : string,
    slug : string,
    content : string,
    categories : Types.ObjectId,
    type : number
}