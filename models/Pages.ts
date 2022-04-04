import {model, Schema, Types} from 'mongoose'
import { IPages } from 'interfaces'

const PageSchema = new Schema<IPages>({
    title : {type : String},
    description : {type : String},
    thumbnail : {type : String},
    type : {type : Number}
})

const Pages = model<IPages>('pages' , PageSchema)

export default Pages