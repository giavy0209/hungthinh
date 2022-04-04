import {model, Schema, Types} from 'mongoose'
import { ICategories } from 'interfaces'

const CategoriesSchema = new Schema<ICategories>({
    title : String,
    meta : String,
    thumbnail : String,
    slug : String,
    type : Number
}, {timestamps : true})

const Categories = model<ICategories>('categories' , CategoriesSchema)

export default Categories