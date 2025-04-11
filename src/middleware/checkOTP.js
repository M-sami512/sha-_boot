import { Otp } from "../../dataBase/models/otb.model.js"
import AppError from "../utils/AppError.js"
import catchError from "../utils/catchError.js"
import bcrypt from 'bcrypt'

export const checkOTP = catchError(
    async (req,res,next)=>{
        const findModel = await Otp.findOne({email:req.headers.email})
        if(!findModel) return next(new AppError('your OTP has been expired',409))
        if (findModel.otp.toString() !== req.body.otp.toString()) return next(new AppError('Incorrect OTP',409))
        req.body.password = bcrypt.hashSync(req.body.password,8)
        next()
    }
)