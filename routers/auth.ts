import { Router } from 'express'
import auth from '../middleware/auth'
import { Banners, Categories } from '../models'
const router = Router()
const string = 'zeJ3DA5oCYaZZ8arivJ6'
router.route('/api/auth')
.post( auth,async (req,res) => {
    const {username , password} = req.body
    if(username !== 'chinh@nguyen@#$123123' || password !=='Nguyen@trong#chinh!@123') return res.status(401).send('sai')
    res.send({status : 1 , data : string})
})
export default router