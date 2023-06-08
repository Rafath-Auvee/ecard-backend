import { Card } from './cards.model'

export const findLastCardId = async () => {
  const lastUser = await Card.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastUser?.id
}

export const generateCardId = async () => {
  const currentId = (await findLastCardId()) || (0).toString().padStart(5, '0') //00000
  //increment by 1
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}
