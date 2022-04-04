import { Router } from 'express'
import uploadFile from '../multer'
import path from 'path'
import Uploads from '../models/Uploads'
const router = Router()

router.route('/api/upload')
.get( async (req,res) => {
    const data = await Uploads.find({})
    .sort({_id : -1})
    res.send({status : 1 , data})
})
.post( uploadFile, async(req,res) => {
    const file = req.file
    const img = new Uploads({ })

    img.path = `/uploads/${file?.filename}`
    await img.save()
    res.send({status : 1})
})

export default router