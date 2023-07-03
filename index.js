import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 5000
// middlewares
dotenv.config()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(morgan('common'))
app.use(cors())

// connect to mongo
const uri = process.env.MONGO_URI
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(async()=>{
    app.listen(port, console.log("running on ", port))
}).catch((err) => {
    console.log(err)
})