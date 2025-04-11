import AppError from "./AppError.js"

const routeNotFoundError = (req,res,next)=>{
    next(new AppError(`Route ${req.originalUrl} Not Found `,404))
}

export default routeNotFoundError