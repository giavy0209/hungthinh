import express , {json , urlencoded, } from 'express'
import cors from 'cors'
import routers from 'routers';
import path from 'path'
import http from 'http'
import 'config'
import 'helpers/connectDB'

const app = express()

app.use(cors())
app.use(json())
app.use(urlencoded({ limit: '50mb', extended: true}))
app.use(express.static('public'))
app.use('/',routers)
app.set('view engine' , 'ejs')

app.get('/admin' , (req,res) => {
    res.sendFile(path.join(__dirname , 'views', 'admin', 'index.html'))
})

const server = http.createServer(app)
server.listen(global.Config.PORT)
