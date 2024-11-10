
import { Router } from 'express'
import { auth } from '../helpers/auth.js'
import { postRegistration, postLogin } from '../controllers/UserController.js'

const router = Router()

router.post('/register', postRegistration)

router.post('/login', postLogin)

export { router }