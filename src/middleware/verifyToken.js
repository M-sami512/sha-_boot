import jwt from 'jsonwebtoken'
import AppError from '../utils/AppError.js'

const verifyToken = async (req,res,next)=>{
    let {token} = req.headers
        jwt.verify(token,'myNameIs7amo',async (error,payload)=>{
            if(error) return next(new AppError('invalid token , '+ error.message,401))
            req.user = payload
        next()    
        })
}

export default verifyToken