import { Otp } from "../../dataBase/models/otb.model.js"
import { User } from "../../dataBase/models/user.model.js"
import AppError from "../utils/AppError.js"
import catchError from "../utils/catchError.js"


export const createOTP = catchError(
    async (req,res,next)=>{
        const user = await User.findOne({email:req.body.email})
        if(!user) return next(new AppError('email not exists',409))
        const otp = Math.floor(100000 + Math.random() * 900000)
        const otpModel = new Otp({ email: req.body.email, otp: otp })
        await otpModel.save()
        req.otp = otp
        next()
    }
)