import { Router } from 'express'
import auth from '../middleware/auth'
import { Banners, Categories } from '../models'
const router = Router()

router.route('/api/banners')
.get( auth,async (req,res) => {
    const data = await Banners.find({})
    .sort({_id : -1})
    res.send({status : 1 , data})
})
.post( auth,async(req,res) => {
    await Banners.create({...req.body})
    res.send({status : 1})
})
.put(auth,async (req,res) => {
    const {_id} = req.query
    await Banners.findByIdAndUpdate(_id , req.body)
    res.send({status : 1})
})
.delete(auth,async (req,res) => {
    const {_id} = req.query
    await Banners.findByIdAndDelete(_id)
    res.send({status : 1})
})
export default router