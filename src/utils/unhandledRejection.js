
export function errorInCode() { 
    process.on('uncaughtException',(error)=>{
        console.log('error in code ===> '+ error.message)
})}

export function errorOutsideExpress() {
    process.on('unhandledRejection',(error)=>{
        console.log(`Error! ===> ${error.message} `)
    })
}