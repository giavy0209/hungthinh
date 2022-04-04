import {model, Schema, Types} from 'mongoose'
import { IUploads } from 'interfaces'

const UploadSchema = new Schema<IUploads>({
    path : {type : String}
})

const Uploads = model<IUploads>('uploads' , UploadSchema)

export default Uploads