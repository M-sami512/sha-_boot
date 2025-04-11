import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const conn = mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.irwnqhb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(()=>{
    console.log('dataBase connected successfuly...')
}).catch((error)=>{
    console.log('dataBase connected error ==> '+error)
})