export default function catchError(callBack){
    return (req,res,next)=>{
        callBack(req,res,next).catch(error =>{
            next(error)
        })
    }
}