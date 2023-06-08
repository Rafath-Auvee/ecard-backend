import express from 'express'
import usersController, { getAllUsersController } from './users.controller'
const router = express.Router()

router.post('/create-user', usersController.createUser)
router.get('/users', getAllUsersController)

export default router
