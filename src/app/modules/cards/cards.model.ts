import { Schema, Model, model, Document } from 'mongoose'
import { ICard } from './cards.interface'

type CardModel = Model<ICard & Document>

const CardSchema = new Schema<ICard>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    cardType: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const Card = model<ICard, CardModel>('Card', CardSchema)
