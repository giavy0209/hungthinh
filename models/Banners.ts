import {model, Schema, Types} from 'mongoose'
import { IBanners } from 'interfaces'

const BannerSchema = new Schema<IBanners>({
    img : {type : String},
    text : {type : String},
    order : {type : Number},
    link : {type : String}
})

const Banners = model<IBanners>('banners' , BannerSchema)

export default Banners