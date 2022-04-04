import { Router } from 'express'
import { Banners, Categories, News } from '../models'
import uslug from 'uslug'
const router = Router()

router.route('/api/news')
.get( async (req,res) => {
    const data = await News.find({})
    .sort({_id : -1})
    res.send({status : 1 , data})
})
.post( async(req,res) => {
    await News.create({...req.body , slug : uslug(req.body.title) + Date.now()})
    res.send({status : 1})
})

export default router