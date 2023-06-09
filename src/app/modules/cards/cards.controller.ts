import { Request, Response } from 'express'

import { ICard } from './cards.interface'
import { createCard, getAllCards } from './cards.service'

export const createCardController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cardData: ICard = req.body
    const newCard = await createCard(cardData)
    res.status(201).json(newCard)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error in creating card. Error Message from controller' })
  }
}

export const getAllCardsController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const cards = await getAllCards()
    res.json(cards)
  } catch (error) {
    res.status(500).json({ error: 'Error to get all cards in controller' })
  }
}
