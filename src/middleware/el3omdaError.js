const el3omdaError = (error,req,res,next)=>{
    let code = error.statusCode || 500
    res.status(code).json({error:'error found!', message: error.message})
}

export default el3omdaError