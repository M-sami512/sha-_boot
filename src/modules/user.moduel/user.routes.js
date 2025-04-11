import {Router} from 'express'
import { validate } from '../../middleware/validate.js'
import checkEmailExists from '../../middleware/checkEmailExists.js'
import * as u from './user.controller.js'
import { signInVal, signUpVal } from './user.validation.js'
import { checkEmailVerify } from '../../middleware/checkEmailVerify.js'

const userRouter = Router()

userRouter.post('/signUp',validate(signUpVal),checkEmailExists,u.signUp)
userRouter.get('/verify/:token',u.verifyAccount)
userRouter.post('/signIn',validate(signInVal),checkEmailVerify,u.signIn)


export default userRouter