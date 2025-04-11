import joi from "joi"

const signUpVal = joi.object({
    username: joi.string().min(3).max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).max(40).required(),
    rePassword: joi.valid(joi.ref('password')).required()
})

const signInVal = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).max(40).required()
})

export{
    signUpVal,
    signInVal
}