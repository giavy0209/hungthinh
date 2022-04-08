import { Router } from 'express'
import { Categories } from '../models'
import slug from 'slug'
import auth from '../middleware/auth'
const router = Router()

router.route('/api/categories')
.get( auth,async (req,res) => {
    const data = await Categories.find({})
    .sort({_id : -1})
    res.send({status : 1 , data})
})
.post( auth,async(req,res) => {

    await Categories.create({...req.body , slug : slug(req.body.title) + Date.now()})
    res.send({status : 1})
})
.put(auth,async (req,res) => {
    const {_id} = req.query
    await Categories.findByIdAndUpdate(_id , req.body)
    res.send({status : 1})
})
.delete(auth,async (req,res) => {
    const {_id} = req.query
    await Categories.findByIdAndDelete(_id)
    res.send({status : 1})
})
export default router