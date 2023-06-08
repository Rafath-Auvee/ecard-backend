import { ICard } from './cards.interface'
import { Card } from './cards.model'

export const createCard = async (cardData: ICard): Promise<ICard> => {
  try {
    const newCard = await Card.create(cardData)
    return newCard
  } catch (error) {
    throw new Error('Error in creating card. Error Message from service')
  }
}
