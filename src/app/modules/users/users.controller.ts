import { Request, Response } from 'express'
import usersService from './users.service'
import { getAllUsers } from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await usersService.createUser(user)
    res.status(200).json({
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      sucess: false,
      message: 'Failed to create user',
    })
  }
}

export default {
  createUser,
}

export const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await getAllUsers()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Error to get all users in controller' })
  }
}
