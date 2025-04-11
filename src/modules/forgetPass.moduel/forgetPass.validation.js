import joi from "joi"

// const otp = joi.object({
//     otp:joi.string().length(6).required(),
// })

const resetPassword = joi.object({
    otp:joi.string().length(6).required(),
    password: joi.string().min(8).max(40).required(),
    rePassword: joi.valid(joi.ref('password')).required()
})

const forgetPassword = joi.object({
    email: joi.string().email().required(),
})

export{
    resetPassword,
    forgetPassword
}