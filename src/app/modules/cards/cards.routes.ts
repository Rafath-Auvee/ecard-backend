import express from 'express'
import { createCardController, getAllCardsController } from './cards.controller'
const router = express.Router()

router.post('/create-card', createCardController)
router.get('/cards', getAllCardsController)

export default router
