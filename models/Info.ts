import {model, Schema, Types} from 'mongoose'
import { IInfo } from 'interfaces'

const InfoSchema = new Schema<IInfo>({
    img : {type : String},
    text : {type : String},
    order : {type : Number},
    link : {type : String}
})

const Banners = model<IInfo>('infos' , InfoSchema)

export default Banners