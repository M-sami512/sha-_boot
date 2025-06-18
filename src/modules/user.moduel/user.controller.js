import { User } from "../../../dataBase/models/user.model.js";
import { sendEmails } from "../../email/email.js";
import AppError from "../../utils/AppError.js";
import catchError from "../../utils/catchError.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

const signUp = catchError(async (req,res,next) =>{
    const user = new User(req.body)
    await user.save()
    await sendEmails(req.body.email)
    res.status(201).json({message:'signUp successfuly, A link has been sent to your email, please confirm your account within 24 hours, If the email did not arrive please check your spam .'})
})


setTimeout(async () => {
    await User.deleteMany({ confirmEmail: false });
}, 86400000);


setTimeout(async () => {
    let x = 10 + 20;
  }, 840000);
  

const verifyAccount = catchError(async (req,res,next) =>{
    jwt.verify(req.params.token, process.env.JWT_SECRET ,async (err,payload)=>{
        if(err) return next(new AppError(err.message,404))
        await User.findOneAndUpdate({email:payload.email},{confirmEmail:true})
        res.status(200).json({message:'Your email has been successfully verified.', email:payload.email})
    })
})

const signIn = catchError(async (req,res,next) =>{
    const user = req.user 
    jwt.sign({ userId:user._id ,userName:user.username,email:user.email}, process.env.JWT_SECRET2 ,
    async(err,token)=>{
        if(err) return next(new AppError(err.message,401))
        res.status(200).json({message:'signIn successfuly',userId:user._id,userName:user.username,email:user.email,token})
    })
})

export{
    signUp,
    verifyAccount,
    signIn
}
