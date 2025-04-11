import { User } from "../../dataBase/models/user.model.js"
import bcrypt from 'bcrypt'
import  AppError  from "../utils/AppError.js"

const checkEmailExists = async (req,res,next)=>{
    const user = await User.findOne({email:req.body.email})
    if(user) return next(new AppError('email allReady exists',409))
    req.body.password = bcrypt.hashSync(req.body.password,8)
    next()
}

export default checkEmailExists