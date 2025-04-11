errorInCode()

import express from 'express'
import { conn } from './dataBase/dbConnection.js'
import routeNotFoundError from './src/utils/routeNotFoundError.js'
import { errorInCode, errorOutsideExpress } from './src/utils/unhandledRejection.js'
import userRouter from './src/modules/user.moduel/user.routes.js'
import el3omdaError from './src/middleware/el3omdaError.js'
import forgetPasswordRouter from './src/modules/forgetPass.moduel/forgetPass.routes.js'
import cors from 'cors'

const app = express()
let port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.use('/auth',userRouter)
app.use('/',forgetPasswordRouter)

app.use('*',routeNotFoundError)
app.use(el3omdaError)
errorOutsideExpress()

app.get('/', (req, res) => res.status(200).json('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))