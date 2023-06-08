import { ICard } from './cards.interface'
import { Card } from './cards.model'
import { generateCardId } from './cards.utils'

export const createCard = async (cardData: ICard): Promise<ICard> => {
  try {
    const id = await generateCardId()
    cardData.id = id
    const newCard = await Card.create(cardData)
    return newCard
  } catch (error) {
    throw new Error('Error in creating card. Error Message from service')
  }
}

export const getAllCards = async (): Promise<ICard[]> => {
  try {
    const cards = await Card.find()
    return cards
  } catch (error) {
    throw new Error('Failed to retrieve cards')
  }
}
