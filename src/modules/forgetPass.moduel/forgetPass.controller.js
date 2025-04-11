import { Otp } from "../../../dataBase/models/otb.model.js";
import { User } from "../../../dataBase/models/user.model.js";
import { sendEmails2 } from "../../email/email.js";
import catchError from "../../utils/catchError.js";

const sendOTP = catchError(
    async (req,res,next)=>{
        const otp = req.otp
        await sendEmails2(req.body.email,otp)
        res.status(200).json({message:'An OTP code has been sent to your email, and is valid for 5 minutes.'})
    }
)

const resetPassword = catchError(
    async (req,res,next)=>{
        await User.findOneAndUpdate({email:req.headers.email},{password:req.body.password})
        await Otp.findOneAndDelete({email:req.headers.email})
        res.status(200).json({message:'your password has been updated successfuly'})
    }
)



export{
    sendOTP,
    resetPassword
}