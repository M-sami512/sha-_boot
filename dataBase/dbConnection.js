import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

export const conn = mongoose.connect(`mongodb+srv://samy:${process.env.DB_PASS}@cluster0.irwnqhb.mongodb.net/shaboot`)
.then(()=>{
    console.log('dataBase connected successfuly...')
}).catch((error)=>{
    console.log('dataBase connected error ==> '+error)
})