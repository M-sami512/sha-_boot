import {Router} from 'express'
import { validate } from '../../middleware/validate.js'
import * as f from './forgetPass.controller.js'
import { forgetPassword, resetPassword} from './forgetPass.validation.js'
import { checkOTP } from '../../middleware/checkOTP.js'
import { createOTP } from '../../middleware/checkEmailFroOTP.js'

const forgetPasswordRouter = Router()

forgetPasswordRouter.post('/forgetPassword',validate(forgetPassword),createOTP,f.sendOTP)
forgetPasswordRouter.put('/resetPassword',validate(resetPassword),checkOTP,f.resetPassword)


export default forgetPasswordRouter