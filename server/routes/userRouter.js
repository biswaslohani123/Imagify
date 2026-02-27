import express from 'express'
import { registerUser } from '../controller/userController.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', registerUser)

export default userRouter