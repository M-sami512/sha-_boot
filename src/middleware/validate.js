import AppError from "../utils/AppError.js"

export const validate = (schema)=>{
    return (req,res,next) =>{
        let {error} = schema.validate({...req.body, ...req.params, ...req.query}, {abortEarly: false})
        if(error) {
           let errMsg = error.details.map(element => element.message )
           return next(new AppError(errMsg,401)) }
        next()
    }
}