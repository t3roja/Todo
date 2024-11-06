import express from 'express'
import cors from 'cors'
import { router } from './routers/todoRouters.js'

dotenv.config()
const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', router)

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 5000
    res.statusCode(statusCode0.json({error: err.message}))
})

app.listen(port)