import {model, Schema, Types} from 'mongoose'
import { IInfo } from 'interfaces'

const InfoSchema = new Schema<IInfo>({
    name : String,
    content : String,
    email : String,
    phone : String
})

const Banners = model<IInfo>('infos' , InfoSchema)

export default Banners