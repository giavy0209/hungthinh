import { Router } from 'express'
import { Banners, Categories } from '../models'
const router = Router()

router.route('/api/banners')
.get( async (req,res) => {
    const data = await Banners.find({})
    .sort({_id : -1})
    res.send({status : 1 , data})
})
.post( async(req,res) => {
    await Banners.create({...req.body})
    res.send({status : 1})
})

export default router