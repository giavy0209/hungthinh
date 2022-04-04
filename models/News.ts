import {model, Schema, Types} from 'mongoose'
import { INews } from 'interfaces'

const NewsSchema = new Schema<INews>({
    title : String,
    meta : String,
    thumbnail : String,
    slug : String,
    content : String,
    categories : {type : Schema.Types.ObjectId , ref : 'categories'},
    type : Number
}, {timestamps : true})

const News = model<INews>('news' , NewsSchema)

export default News