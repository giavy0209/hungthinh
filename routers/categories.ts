import { Router } from 'express'
import { Categories } from '../models'
import uslug from 'uslug'
const router = Router()

router.route('/api/categories')
.get( async (req,res) => {
    const data = await Categories.find({})
    .sort({_id : -1})
    res.send({status : 1 , data})
})
.post( async(req,res) => {

    await Categories.create({...req.body , slug : uslug(req.body.title) + Date.now()})
    res.send({status : 1})
})

export default router