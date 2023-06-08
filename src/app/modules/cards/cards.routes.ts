import express from 'express'
import { createCardController } from './cards.controller'
const router = express.Router()

router.post('/create-card', createCardController)

export default router
