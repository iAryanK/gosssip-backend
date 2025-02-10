import { Router } from 'express'
import { catchError } from '../common/middleware/catch-error.middleware'
import * as userController from './user.controller'
import * as userValidator from './user.validation'

const router = Router()

router
    .post('/', userValidator.createUser, catchError, userController.createUser)
    .get('/:email', userController.getUserByEmail)
    .get('/id/:id', userController.getUserById)

export default router
