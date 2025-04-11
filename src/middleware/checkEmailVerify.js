import { User } from "../../dataBase/models/user.model.js"
import AppError from "../utils/AppError.js"
import bcrypt from 'bcrypt'

export const checkEmailVerify = async (req,res,next)=>{
      const user = await User.findOne({email:req.body.email})
        if(!user || !bcrypt.compareSync(req.body.password,user.password))
           return next(new AppError('incorrect email or password',401))
        if(!user.confirmEmail)return next(new AppError('pleas confirm your account first',499))
         req.user = user
        next()
}