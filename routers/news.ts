import { Router } from 'express'
import { Banners, Categories, Info, News } from '../models'
import slug from 'slug'
import auth from '../middleware/auth'

const router = Router()

router.route('/api/news')
.get(  auth,async (req,res) => {
    const data = await News.find({})
    .sort({_id : -1})
    res.send({status : 1 , data})
})
.post(  auth,async(req,res) => {
    await News.create({...req.body , slug : slug(req.body.title) + Date.now()})
    res.send({status : 1})
})
.put( auth,async (req,res) => {
    const {_id} = req.query
    await News.findByIdAndUpdate(_id , req.body)
    res.send({status : 1})
})
.delete( auth,async (req,res) => {
    const {_id} = req.query
    await News.findByIdAndDelete(_id)
    res.send({status : 1})
})

router.route('/api/info')
    .get( auth,async (req,res) => {
        const data = await Info.find({})
        .sort({ _id : -1})
        res.send({status : 1 , data})
    })

export default router